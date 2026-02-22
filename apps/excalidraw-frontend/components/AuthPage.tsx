"use client";

import { HTTP_BACKEND } from "../config";
import axios from "axios";
import { CircleUser } from "lucide-react";
import { useState } from "react";
import {toast} from "@repo/ui/components/ui/sonner"
import Header from "./Header";
import { Spinner } from "@repo/ui/components/ui/spinner";
import { Button } from "@repo/ui/components/ui/button";
import { Input } from "@repo/ui/components/ui/input";
import { useRouter } from "next/navigation";
import { userState } from "../store/user";

export function AuthPage() {
  const [signup, setSignup] = useState(true);
  const [loading, setLoading] = useState(false);

  const setToken = userState((state) => state.setToken);
  const token = userState((state) => state.token);
  const isLoggedIn = !!token;

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  const sendRequest = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
        `${HTTP_BACKEND}/${signup ? "signup" : "signin"}`,
        input
      );

      if (res.data.status) {
        toast.success(
          `${res.data.user.name} ${
            signup ? "signup" : "signin"
          } successfully`
        );

        setToken(res.data.token);   // ✅ only this needed

        router.push("/");
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header user={isLoggedIn} />

      <div className="grid grid-cols-2 w-full flex-1">
        <div className="flex justify-center items-center">
          <form
            onSubmit={sendRequest}
            className="bg-white rounded-2xl w-2/3 p-5"
          >
            <div className="flex flex-col items-center mt-2">
              <CircleUser className="h-13 w-13 text-blue-500" />
              <div className="font-semibold mt-2">
                Already have an account?{" "}
                <span
                  onClick={() => setSignup(!signup)}
                  className="underline text-primary cursor-pointer"
                >
                  {signup ? "signin" : "signup"}
                </span>
              </div>
            </div>

            <div className="mt-8">
              {signup && (
                <div className="flex flex-col">
                  <span className="mt-2 font-semibold">Name</span>
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    className="bg-gray-200 rounded-md p-1"
                    onChange={(e) =>
                      setInput({ ...input, name: e.target.value })
                    }
                  />
                </div>
              )}

              <div className="flex flex-col">
                <span className="mt-8 font-semibold">Email</span>
                <Input
                  type="text"
                  placeholder="Enter your email"
                  className="bg-gray-200 rounded-md p-1"
                  onChange={(e) =>
                    setInput({ ...input, email: e.target.value })
                  }
                />
              </div>

              <div className="flex flex-col">
                <span className="mt-8 font-semibold">Password</span>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  className="bg-gray-200 mb-1 rounded-md p-1"
                  onChange={(e) =>
                    setInput({ ...input, password: e.target.value })
                  }
                />
              </div>

              <Button className="bg-primary text-white font-semibold rounded-md mt-5 w-full p-1">
                {loading ? <Spinner /> : signup ? "signup" : "signin"}
              </Button>
            </div>
          </form>
        </div>

        <div className="w-full rounded-l-3xl border-l-10 border-orange-600 bg-cover bg-[url('https://images.unsplash.com/photo-1588856122867-363b0aa7f598?q=80&w=773&auto=format&fit=crop')]"></div>
      </div>
    </div>
  );
}