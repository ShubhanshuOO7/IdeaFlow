import WebSocket, { WebSocketServer } from "ws";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import { prismaClient } from "@repo/db/client";
import { createServer } from "http";

const httpServer = createServer((req, res) => {
  res.writeHead(404);
  res.end();
});

const wss = new WebSocketServer({
  server: httpServer
});

const PORT = Number(process.env.PORT) || 8080;

httpServer.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 WebSocket server running on port ${PORT}`);
});

const checkUser = (token: string) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (typeof decoded === "string") return null;
    if (!decoded || !decoded.userId) return null;
    return decoded.userId;
  } catch {
    return null;
  }
};

interface User {
  userId: string;
  rooms: string[];
  ws: WebSocket;
}

const users: User[] = [];

wss.on("connection", (ws, request) => {
  const url = request.url;
  if (!url) return;

  const queryParams = new URLSearchParams(url.split("?")[1]);
  const token = queryParams.get("token") || "";
  const userId = checkUser(token);

  if (!userId) {
    ws.close();
    return;
  }

  const user: User = {
    userId,
    rooms: [],
    ws
  };

  users.push(user);

  ws.on("message", async (data) => {
    try {
      const parsedData = JSON.parse(data.toString());

      if (parsedData.type === "join_room") {
        if (!user.rooms.includes(parsedData.roomId)) {
          user.rooms.push(parsedData.roomId);
        }
      }

      if (parsedData.type === "leave_room") {
        user.rooms = user.rooms.filter((x) => x !== parsedData.roomId);
      }

      if (parsedData.type === "chat") {
        const { roomId, message } = parsedData;

        if (!roomId || !user.rooms.includes(roomId)) return;

        await prismaClient.chat.create({
          data: {
            roomId: Number(roomId),
            message,
            userId
          }
        });

        users.forEach((u) => {
          if (
            u.rooms.includes(roomId) &&
            u.ws.readyState === WebSocket.OPEN
          ) {
            u.ws.send(
              JSON.stringify({
                type: "chat",
                message,
                roomId
              })
            );
          }
        });
      }

      if (parsedData.type === "writtenChat") {
        const { roomId, message } = parsedData;

        if (!roomId || !user.rooms.includes(roomId)) return;

        users.forEach((u) => {
          if (
            u.rooms.includes(roomId) &&
            u.ws.readyState === WebSocket.OPEN
          ) {
            u.ws.send(
              JSON.stringify({
                type: "writtenChat",
                message,
                roomId
              })
            );
          }
        });
      }
    } catch (error) {
      console.log(`Error aaya hain ${error}`);
    }
  });

  ws.on("close", () => {
    const index = users.findIndex((u) => u.ws === ws);
    if (index !== -1) {
      users.splice(index, 1);
    }
  });
});