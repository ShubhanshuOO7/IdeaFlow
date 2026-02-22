import z, { email } from "zod";

export const signupSchema = z.object({
    name : z.string().min(3).max(20),
    email : z.string(),
    password : z.string()
})

export const signinSchema = z.object({
    email : z.string(),
    password : z.string()
})

export const createRoomSchema = z.object({
    slug : z.string().min(3).max(20)
})