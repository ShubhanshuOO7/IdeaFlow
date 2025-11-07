import z from "zod";

export const signupSchema = z.object({
    name : z.string().min(3).max(20),
    username : z.string(),
    password : z.string()
})

export const signinSchema = z.object({
    username : z.string(),
    password : z.string()
})

export const createRoomSchema = z.object({
    slug : z.string().min(3).max(20)
})