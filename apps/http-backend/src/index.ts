import express, { json } from "express";
import jwt, { sign } from "jsonwebtoken";
import {signinSchema, signupSchema,createRoomSchema} from "@repo/common/types"
import {prismaClient} from "@repo/db/client"
import {JWT_SECRET} from "@repo/backend-common/config"
import { middleware } from "./middleware";
import cors from "cors"
const app = express();
app.use(express.json());
app.use(cors());
app.post("/signup",async(req,res)=>{
    try {
        
        const parsedData = signupSchema.safeParse(req.body)
        if(!parsedData.success){
            return res.status(400).json({message:"Incorrect inputs"})
        }
        const {username,password,name} = parsedData.data;
        if(!username || !password || !name){
            return res.status(400).json({
                message: "Missing required fields"
            })
        }
        const user = await prismaClient.user.create({
            data:{
                email : username,
                name : name,
                password : password
            }
        })
        const token = jwt.sign({userId : user.id},JWT_SECRET)
        return res.status(200).json({
            status: true,
            token : token,
            userId : user.id
        })
    } catch (error) {
        console.log(error)
    }
})

app.post("/signin",async(req,res)=>{
    try {
        
        const parsedData = signinSchema.safeParse(req.body)
        if(!parsedData.success){
            return res.status(400).json({
                message : "Incorrect inputs"
            })
        }
        const {username,password} = parsedData.data;
    
        if( !username || !password){
            return res.status(400).json({
                message: "Missing required fields"
            })
        }
        const user = await prismaClient.user.findFirst({
           where:{
            email : username,
            password : password
           }
        })
        if(!user){
            return res.status(400).json({
                message: "User not available"
            })
        }
        const token = jwt.sign({userId: user.id},JWT_SECRET)
        return res.status(200).json({
            status : true,
            message: "Signin successfully",
            token
        })
    } catch (error) {
        console.log(error)
    }
    
})

app.post("/createRoom",middleware,async(req,res)=>{
    try {
        
        const parsedData = createRoomSchema.safeParse(req.body);
        if(!parsedData.success){
            return res.status(400).json({
                message: "Invalid inputs"
            })
        }
        //@ts-ignore
        const userId = req.userId
        
        const room = await prismaClient.room.create({
            data:{
                slug : parsedData.data.slug,
                adminId : userId
            }
        })
        return res.status(200).json({
            roomId: room.id
        })
    } catch (error) {
        return res.json({
            message: "User already exist with this name"
        })
    }
    
})

app.get("/chats/:roomId",async(req,res)=>{
    const roomId = Number(req.params.roomId)
    const messages = await prismaClient.chat.findMany({
        where:{
            roomId : roomId
        },
        orderBy:{
            id: "desc"
        },
        take: 50
    })
    res.json({
        messages
    })
})

app.get("/rooms/:slug",async(req,res)=>{
    const slug  = req.params.slug
    const room  = await prismaClient.room.findFirst({
        where:{
            slug : slug
        }
    })
    res.json({
        room
    })
})

app.listen(3001,()=>{
    console.log("App is listening on 3001")
})