import Image from "next/image";
import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import LogoIcon from "@/lib/icons/logo";
import RusFlagIcon from "@/lib/icons/rus-flag";
import CartIcon from "@/lib/icons/cart";
import Link from "next/link";

import { HeaderMenu } from "./menu";

export default function Header() {
  return (
    <>
      <div className="  bg-[#F5F6F8]">
        <div className="flex justify-between max-w-[1170px] mx-auto px-3  py-3">
          <a href="#" className=" outline-none">
            ул.Московская 129
          </a>
          <div className=" flex gap-2 hover:cursor-pointer">
            <RusFlagIcon />
            <p>Rus</p>
          </div>
        </div>
      </div>
      <header className=" bg-white sticky top-0 z-50">
        <div className=" flex justify-between items-center max-w-[1170px] mx-auto px-3 h-[72px]">
          <HeaderMenu />
          <div className=" md:hidden flex">
            {" "}
            <DropdownMenu>
              <DropdownMenuTrigger>
                {
                  <Image
                    src="/images/more.png"
                    alt="more"
                    width={24}
                    height={24}
                  />
                }
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Категории</DropdownMenuItem>
                <DropdownMenuItem>Покупателям</DropdownMenuItem>
                <DropdownMenuItem>Бренд</DropdownMenuItem>
                <DropdownMenuItem>Блог</DropdownMenuItem>
                <DropdownMenuItem>Search</DropdownMenuItem>
                <DropdownMenuItem>Favorites</DropdownMenuItem>
                <DropdownMenuItem>Cart</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className=" flex items-center gap-14 h-full">
            <div>
              <Link href="/">
                <LogoIcon />
              </Link>
            </div>
          </div>
          <div className=" flex items-center h-full">
            <div className=" flex items-center max-[530px]:hidden border-l border-[#EEEEEE] pl-4">
              <Image
                src="/images/search.png"
                alt="search"
                width={18}
                height={18}
              />
              <input
                type="text"
                placeholder="Search..."
                className=" text-lg h-full outline-none px-4"
              />
            </div>
            <div className=" flex  h-full items-center">
              <Link href="/Cart">
                <div className=" h-full w-[72px] flex items-center justify-center border-l border-[#EEEEEE] border-r cursor-pointer hover:bg-[#F5F6F8] transition-all">
                  <CartIcon />
                </div>
              </Link>

              <div className=" h-full w-[72px] flex items-center justify-center border-r border-[#EEEEEE] cursor-pointer hover:bg-[#F5F6F8] transition-all">
                <Image
                  src="/images/human.png"
                  alt="icon"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" text-white bg-black h-12 flex items-center justify-center">
          <h3 className=" text-[18px] font-medium animate-pulse tracking-widest">
            Скидки будут всю весну ! ! !
          </h3>
        </div>
      </header>
    </>
  );
}
