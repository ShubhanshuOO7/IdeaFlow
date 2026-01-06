import WebSocket, { WebSocketServer } from "ws";
import jwt, { JwtPayload } from "jsonwebtoken"
import {JWT_SECRET} from "@repo/backend-common/config"
import {prismaClient} from "@repo/db/client"
const wss = new WebSocketServer({port:8080});

const checkUser = (token : string)=>{
   try {
     const decoded = jwt.verify(token,JWT_SECRET);
     if(typeof decoded == "string"){
         return null;
     }
     if(!decoded || !decoded.userId){
       return null;
     }
     return decoded.userId;
   } catch (e) {
      return null
   }
   return null
}
interface User{
  userId : string
  rooms : string[]
  ws : WebSocket
}

const users : User[] = [];
 
// const users = [{
//   userId : 1,
//   rooms : ["rooms1","rooms2",],
//   ws: socket
// },{
//   userId : 2,
//   rooms : ["room1"],
//   ws: socket
// },{
//   userId : 3,
//   rooms: [],
//   ws : socket
// }]
wss.on("connection",(ws,request)=>{
  const url = request.url
  if(!url){
    return
  }
  const queryParams = new URLSearchParams(url?.split('?')[1]);
  const token = queryParams.get('token') || ""
  const userId = checkUser(token);
  if(userId == null){
    ws.close();
    return null
  }
  users.push({
    userId,
    rooms : [],
    ws
  })
    ws.on("message",async function message(data){
      let parsedData:any;
      try {
        
         parsedData = JSON.parse(data as unknown as string);
         if(parsedData.type === "join_room"){
            const user = users.find(x=>x.ws===ws);
            user?.rooms.push(parsedData.roomId)
         }
         if(parsedData.type === "leave_room"){
           const user = users.find(x=>x.ws===ws);
           if(!user){
             return;
           }
           user.rooms = user?.rooms.filter(x=>x===parsedData.room);
   
         }
         if(parsedData.type==="chat"){
           const roomId = parsedData.roomId;
           const message = parsedData.message;
           
           await prismaClient.chat.create({
                data:{
                  roomId : Number(roomId),
                  message,
                  userId
                }
           })
           
           users.forEach(user=>{
             if(user.rooms.includes(roomId)){
               user.ws.send(JSON.stringify({
                 type: "chat",
                 message: message,
                 roomId
               }))
             }
           })
         }
      } catch (error) {
        console.log(`Error aaya hain${error}`);
      }
    })
   
})