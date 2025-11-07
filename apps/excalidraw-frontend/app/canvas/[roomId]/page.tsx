"use client"
import initDraw from "@/draw"
import { init } from "next/dist/compiled/webpack/webpack"
import { useEffect, useRef } from "react"
import { start } from "repl"

export default function Canvas(){
    const canvasref = useRef<HTMLCanvasElement>(null)
    useEffect(()=>{
        if(canvasref.current){
            initDraw(canvasref.current)
        }
    })
    return <div>
        <canvas ref={canvasref} width={1500} height={1000}></canvas>
    </div>
}