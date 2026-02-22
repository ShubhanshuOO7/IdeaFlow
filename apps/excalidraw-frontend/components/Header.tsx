"use client";
import { Button } from "@repo/ui/components/ui/button";
import { LogOut, PenTool } from "lucide-react";
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@repo/ui/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@repo/ui/components/ui/popover";
import React from "react";
import Link from "next/link";
import axios from "axios";
import { HTTP_BACKEND } from "../config";
import { userState } from "../store/user";
import { toast } from "sonner";
const Header = ({ user }: { user: boolean }) => {
  const setToken = userState((state)=>state.setToken)
  const logsOut = async()=>{
    const res = await axios.get(`${HTTP_BACKEND}/logout`);
    if(res.data.status){
      toast.success(res.data.message)
      setToken(null)
      window.location.href = "/signin"
    }
  }
  return (
    <div>
      <nav className="top-0 z-50 border-b border-border bg-white backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div
              className="flex items-center gap-2 hover:cursor-pointer"
              onClick={() => {
                <Link href={"/"} />;
              }}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-700">
                <PenTool className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-sm font-semibold tracking-tight">
                IdeaFlow
              </span>
            </div>
            <div className="hidden items-center gap-8 md:flex">
              <a
                href="#features"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition"
              >
                Features
              </a>
              <a
                href="#showcase"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition"
              >
                Showcase
              </a>
              <a
                href="#pricing"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition"
              >
                Pricing
              </a>
            </div>
            {user ? (
              <div>
                <Popover>
                  <PopoverTrigger asChild>
                    <Avatar size="lg" className="cursor-pointer">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                      <AvatarBadge className="bg-green-600 dark:bg-green-800" />
                    </Avatar>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="flex items-center gap-5">
                      <LogOut/>
                      <Button onClick={logsOut} className="cursor-pointer" variant="destructive">Logout</Button>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link href="/signin">
                  <Button className="bg-blue-700 hover:bg-blue-600 hover:cursor-pointer focus:outline-2">
                    Sign In
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button className="bg-blue-700 hover:bg-blue-600 hover:cursor-pointer">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
