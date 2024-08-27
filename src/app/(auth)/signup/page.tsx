"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import GoogleIcon from "@/lib/icons/google";
import useAuth from "@/utils/useAuth";
import { useRouter } from "next/navigation";
import React, { ReactNode, useState } from "react";
import { toast } from "sonner";

export default function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");

  const { signup } = useAuth();

  const router = useRouter();

  async function handleSignUp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const res = await signup(email, password, firstName, lastName);

    if (res?.user) {
      router.push("/");
      toast.success("You succesuful sign-up");
    } else {
      toast.error(res.message);
    }
  }

  return (
    <section className=" bg-[#F5F6F8] h-screen flex items-center">
      <div className=" w-[430px] mx-auto bg-white p-10 ">
        <div className=" flex flex-col gap-4 ">
          <h2 className=" text-3xl font-bold p-3 text-center">Sign Up</h2>

          <Button
            variant="ghost"
            className=" flex justify-center items-center gap-3 rounded-none border border-gray-200"
          >
            <GoogleIcon />

            <p className=" font-bold tracking-[2px]">Продолжить через Google</p>
          </Button>
        </div>
        <form onSubmit={handleSignUp}>
          <div className=" flex items-center justify-center">
            <Separator className=" w-[41%]" />
            <h2 className=" text-center font-bold p-5">Или</h2>
            <Separator className=" w-[41%]" />
          </div>
          <div className=" flex flex-col gap-3">
            <div>
              <Label htmlFor="firstName" className="text-right">
                FirstName
              </Label>
              <Input
                required
                id="Firstname"
                className="col-span-3 rounded-none border-2 border-gray-200 "
                type="text"
                value={firstName}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="lastName" className="text-right">
                LastName
              </Label>
              <Input
                required
                id="lastName"
                className="col-span-3 rounded-none border-2 border-gray-200 "
                type="text"
                value={lastName}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                required
                id="email"
                className="col-span-3 rounded-none border-2 border-gray-200 "
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="Password" className="text-right">
                Password
              </Label>
              <Input
                required
                id="Password"
                className="col-span-3 rounded-none border-2 border-gray-200 "
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-2 justify-between">
              <div className="flex items-center space-x-2 ">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 py-5"
                >
                  Remember me
                </label>
              </div>
              <div>
                <Button
                  className=" outline-none bg-white text-black"
                  variant="ghost"
                >
                  Забыл пароль
                </Button>
              </div>
            </div>
          </div>
          <div>
            <Button
              variant="ghost"
              className=" bg-[#2C3453] w-full text-white text-center mt-4"
              type="submit"
            >
              Sign Up
            </Button>
          </div>
          <div className=" flex  items-center justify-center p-2 gap-2">
            <p className=" text-[#666666]">У вас уже есть аакаунт?</p>
            <span
              className="cursor-pointer "
              onClick={() => router.push("/login")}
            >
              Вход
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}
