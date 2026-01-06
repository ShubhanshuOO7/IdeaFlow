"use client";

import { HTTP_BACKEND } from "@/config";
import axios from "axios";
import { CircleUser } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
export function AuthPage() {
  const[signup,setSignup] =useState<boolean>(true)
  const[input,setInput] = useState({
    name : "",
    email: "",
    password: ""
  })
  const sendRequest = async()=>{
      const res = await axios.post(`${HTTP_BACKEND}/signup`,input,{
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials : true
      })
      if(res.data.status){
         <Link href={"/"}></Link>
      }
  }
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-cover bg-primary">
          <div className="flex flex-col bg-white w-1/3 border border-black rounded-2xl p-2">
          <div className="flex flex-col items-center mt-2">
               <CircleUser className="h-13 w-13 bg-primary rounded-full text-white"/>
               <div className="font-semibold mt-2">Already have an account ? <span onClick={()=>
                {signup ? setSignup(false) : setSignup(true)}} className="underline text-primary cursor-pointer">{signup ? "signin" : "signup"}</span></div>
          </div>
          <div>
              {signup ? 
              <div className="flex flex-col">
               <span className="mt-2 font-semibold">Name</span>
               <input type="text" placeholder="Enter your name" className="bg-gray-200 rounded-md p-1" onChange={(e)=>{
                setInput({
                  ...input,
                  name: e.target.value
                })
               }}/>
              </div> : ""
            }
              <div className="flex flex-col">
               <span className="mt-4 font-semibold">Email</span>
               <input type="text" placeholder="Enter your email" className="bg-gray-200 rounded-md p-1" onChange={(e)=>{
                setInput({
                  ...input,
                  email: e.target.value
                })
               }}/>
              </div>
              <div className="flex flex-col">
               <span className="mt-4 font-semibold">Password</span>
               <input type="password" placeholder="Enter your password" className="bg-gray-200 mb-1 rounded-md p-1" onChange={(e)=>{
                  setInput({
                    ...input,
                    password: e.target.value
                  })
               }}/>
              </div>
               <button className="bg-primary text-white font-semibold rounded-md mt-5 w-full" onClick={sendRequest}>{signup ? "signup" : "signin"}</button>
          </div>
          </div>
    </div>
   
  )
}
