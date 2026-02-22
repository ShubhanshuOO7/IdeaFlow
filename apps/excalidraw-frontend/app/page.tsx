"use client"
import { PenTool, Users, Zap, Share2, ArrowRight } from "lucide-react";
// import { Button } from "@repo/ui/src/com";
import {Button} from "@repo/ui/components/ui/button"
import {Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@repo/ui/components/ui/dialog"
import {Label} from "@repo/ui/components/ui/label"
import {Input} from "@repo/ui/components/ui/input"
import { Spinner } from "@repo/ui/components/ui/spinner";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { HTTP_BACKEND } from "../config";
import { userState } from "../store/user";

export default function Home() {
  const router = useRouter();
  const[slug,setSlug] = useState("")
  const[loading,setLoading] = useState(false);
  const[roomId,setRoomId] = useState("")
  const token =userState((state)=>state.token)
  const isLoggedIn = token ? true : false
  const createRoom = async(res:any)=>{
     try {
      setLoading(true);
      const res = await axios.post(`${HTTP_BACKEND}/createRoom`,{slug},{
        headers:{
          Authorization : localStorage.getItem("token")
        }
      })
      if(res.data){
        setLoading(false)
        router.push(`/canvas/${res.data.roomId}`)
      }
     } catch (error) {
        console.log(error);
     }
  }
  const joinRoom = async()=>{
    try {
      setLoading(true)
      const res = await axios.get(`${HTTP_BACKEND}/rooms/${slug}`,{
        headers:{
          Authorization: localStorage.getItem("token")
        }
      })
      if(res.data){
        setLoading(false);
        router.push(`/canvas/${res.data.room.id}`);
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="min-h-screen ">
      {/* Navigation */}
      <Header user={isLoggedIn}/>
      {/* Hero Section */}
      <section className="relative bg-blue-100  px-4 py-5 sm:py-32 md:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-block">
                  <p className="text-xs font-semibold text-primary uppercase tracking-widest bg-primary/10 rounded-full px-4 py-1.5">
                    New: Infinite Canvas
                  </p>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight text-balance">
                  Think. <span className="text-blue-700">Sketch.</span>{" "}
                  <br className="hidden sm:block" />
                  <span className="text-primary">Collaborate.</span>
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-7 font-medium">
                  The infinite canvas for your ideas. DrawBoard brings your team
                  together to sketch, design, and brainstorm in real-time.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Dialog>
                    <DialogTrigger asChild>   
                      <Button onClick={()=>{
                        if(!isLoggedIn)router.push("/signin")
                      }} size="lg" className=" flex rounded-full gap-2 h-12 px-8 font-semibold text-sm justify-center items-center">
                        <div>Start Drawing Free</div>
                        <ArrowRight className="h-5 w-5" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-xl h-xl">
                      <DialogHeader>
                          <DialogTitle>Create Room</DialogTitle>
                          <DialogDescription>
                            Before starting you need to create a room first
                          </DialogDescription>
                          <Label>Room Name</Label>
                          <Input onChange={(e)=>{
                            setSlug(e.target.value);
                            //console.log(e.target.value)
                          }} placeholder="xyz"></Input>
                          <DialogFooter>
                            <DialogClose asChild>
                               <Button variant={"outline"}>Cancel</Button>
                            </DialogClose>
                               <Button onClick={createRoom}>
                                
                                {loading ? <Spinner/> : "Save"}
                                </Button>
                          </DialogFooter>
                      </DialogHeader>

                    </DialogContent>
                </Dialog>
                <Dialog>
                    <DialogTrigger asChild>   
                      <Button size="lg" className=" flex rounded-full gap-2 h-12 px-8 font-semibold text-sm justify-center items-center">
                        <div>Join a room</div>
                        <ArrowRight className="h-5 w-5" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-xl h-xl">
                      <DialogHeader>
                          <DialogTitle>Join room</DialogTitle>
                          <DialogDescription>
                            Write the name of the room that you want to join
                          </DialogDescription>
                          <Label>Room Name</Label>
                          <Input onChange={(e)=>{
                            setSlug(e.target.value);
                            //console.log(e.target.value)
                          }} placeholder="xyz"></Input>
                          <DialogFooter>
                            <DialogClose asChild>
                               <Button variant={"outline"}>Cancel</Button>
                            </DialogClose>
                               <Button onClick={joinRoom}>Join</Button>
                          </DialogFooter>
                      </DialogHeader>

                    </DialogContent>
                </Dialog>
              </div>
              <p className="text-xs text-muted-foreground font-medium">
                No credit card required. Free forever plan included.
              </p>
            </div>
              {/*https://images.unsplash.com/photo-1588856122867-363b0aa7f598?q=80&w=773&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D */}
            {/* Right Visual */}
            <div className="bg-cover w-full h-full rounded-sm border-2 border-white bg-[url('https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
            </div>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section id="features" className="px-4 py-20 md:py-32 bg-blue-100">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-blue-700">
              Powerful features for creative teams
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium leading-6">
              Everything you need to sketch, design, and collaborate seamlessly
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-2xl border-2 border-border hover:border-blue-600 transition duration-300 bg-card hover:shadow-lg hover:shadow-primary/5">
              <div className="h-14 w-14 rounded-xl bg-blue-600 flex items-center justify-center mb-6">
                <PenTool className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-foreground">
                Infinite Canvas
              </h3>
              <p className="text-muted-foreground leading-6 text-sm font-medium">
                Draw freely without boundaries. Your canvas expands as you
                create, perfect for sketching big ideas.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-2xl border-2 border-border hover:border-blue-600 transition duration-300 bg-card hover:shadow-lg hover:shadow-primary/5">
              <div className="h-14 w-14 rounded-xl bg-blue-600 flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-foreground">
                Real-Time Collaboration
              </h3>
              <p className="text-muted-foreground leading-6 text-sm font-medium">
                Invite teammates and sketch together instantly. See changes live
                with zero latency.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-2xl border-2 border-border hover:border-blue-700 transition duration-300 bg-card hover:shadow-lg hover:shadow-primary/5">
              <div className="h-14 w-14 rounded-xl bg-blue-700 flex items-center justify-center mb-6">
                <Zap className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-foreground">
                Lightning Fast
              </h3>
              <p className="text-muted-foreground leading-6 text-sm font-medium">
                Optimized for speed. Experience smooth, responsive drawing with
                zero lag.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-8 rounded-2xl border-2 border-border hover:border-blue-700 transition duration-300 bg-card hover:shadow-lg hover:shadow-primary/5">
              <div className="h-14 w-14 rounded-xl bg-blue-600 flex items-center justify-center mb-6">
                <Share2 className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-foreground">
                Easy Sharing
              </h3>
              <p className="text-muted-foreground leading-6 text-sm font-medium">
                Share boards with a link or export as PNG, SVG, or PDF
                instantly.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-8 rounded-2xl border-2 border-border hover:border-blue-700 transition duration-300 bg-card hover:shadow-lg hover:shadow-primary/5">
              <div className="h-14 w-14 rounded-xl bg-blue-700 flex items-center justify-center mb-6">
                <PenTool className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-foreground">
                Rich Drawing Tools
              </h3>
              <p className="text-muted-foreground leading-6 text-sm font-medium">
                Extensive brush styles, shapes, and customization options for
                your unique style.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-8 rounded-2xl border-2 border-border hover:border-blue-700 transition duration-300 bg-card hover:shadow-lg hover:shadow-primary/5">
              <div className="h-14 w-14 rounded-xl bg-blue-700 flex items-center justify-center mb-6">
                <Zap className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-foreground">
                Version History
              </h3>
              <p className="text-muted-foreground leading-6 text-sm font-medium">
                Never lose your work. Access previous versions and restore
                anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section
        id="showcase"
        className="px-4 py-20 md:py-32 bg-blue-100 from-muted/30 to-background"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-balance">
                <span className="text-blue-700">Collaboration</span> Made Simple
              </h2>
              <p className="text-base text-muted-foreground leading-7 font-medium">
                Bring your entire team into the creative process. Chat, comment,
                and iterate together on the same canvas.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/20 text-primary font-bold text-xs flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="text-foreground leading-6 text-sm font-medium">
                    Multiple team members drawing simultaneously
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/20 text-primary font-bold text-xs flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="text-foreground leading-6 text-sm font-medium">
                    Built-in comments and annotations
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/20 text-primary font-bold text-xs flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="text-foreground leading-6 text-sm font-medium">
                    Permission controls and sharing settings
                  </span>
                </li>
              </ul>
              <Button
                size="lg"
                className="rounded-full gap-2 h-12 px-8 text-sm font-semibold w-fit"
              >
                Learn More
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
             <div className="bg-cover w-full h-full rounded-md  bg-[url('https://plus.unsplash.com/premium_photo-1677529496297-fd0174d65941?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="px-4 py-12 md:py-16 border-t border-border bg-background">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-5 gap-12 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                  <PenTool className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-sm">IdeaFlow</span>
              </div>
              <p className="text-xs text-muted-foreground leading-6 font-medium">
                The collaborative whiteboard for creative minds.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground text-sm">
                Product
              </h4>
              <ul className="space-y-3 text-xs text-muted-foreground font-medium">
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition duration-200"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition duration-200"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition duration-200"
                  >
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground text-sm">
                Company
              </h4>
              <ul className="space-y-3 text-xs text-muted-foreground font-medium">
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition duration-200"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition duration-200"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition duration-200"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground text-sm">
                Legal
              </h4>
              <ul className="space-y-3 text-xs text-muted-foreground font-medium">
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition duration-200"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition duration-200"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition duration-200"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground text-sm">
                Follow
              </h4>
              <ul className="space-y-3 text-xs text-muted-foreground font-medium">
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition duration-200"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition duration-200"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition duration-200"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground font-medium">
            <p>&copy; 2025 IdeaFlow. All rights reserved.</p>
            <p>Made with care for creative teams</p>
          </div>
        </div>
      </section>
    </div>
  );
}
