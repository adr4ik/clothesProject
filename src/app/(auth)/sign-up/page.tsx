import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import GoogleIcon from "@/lib/icons/google";
import React from "react";

export default function page() {
  return (
    <section className=" bg-[#F5F6F8]">
      <div className=" max-w-[430px] m-auto py-44">
        <div className=" flex flex-col gap-4">
          <h2 className=" text-3xl font-bold p-3 text-center">Регистрация</h2>
          <Separator />
          <div className=" flex justify-center items-center gap-3">
            <GoogleIcon />

            <p className=" font-bold">Продолжить через Google</p>
          </div>
          <Separator />
        </div>
        <div>
          <h2 className=" text-center font-bold p-5">Или</h2>
          <div>
            <div>
              <Label htmlFor="Name" className="text-right">
                Name
              </Label>
              <Input id="Name" className="col-span-3" type="number" />
            </div>
            <div>
              <Label htmlFor="Surname" className="text-right">
                Surname
              </Label>
              <Input id="Surname" className="col-span-3" type="number" />
            </div>
            <div>
              <Label htmlFor="Email" className="text-right">
                Email
              </Label>
              <Input id="Email" className="col-span-3" type="number" />
            </div>
            <div>
              <Label htmlFor="Password" className="text-right">
                Password
              </Label>
              <Input id="Password" className="col-span-3" type="number" />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 py-5"
              >
                Accept terms and conditions
              </label>
            </div>
          </div>
          <div>
            <Button
              variant="ghost"
              className=" bg-[#2C3453] w-full text-white text-center mt-4"
            >
              Create Accaunt
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
