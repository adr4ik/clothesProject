import Image from "next/image";
import React from "react";
import More from "../../../public/images/more.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export default function Header() {
  return (
    <header>
      <div className=" flex flex-col gap-7 mt-3">
        <div className=" flex justify-between px-32">
          <a href="#" className=" outline-none">
            ул.Московская 129
          </a>
          <div className=" flex gap-2 hover:cursor-pointer hover:border">
            <Image
              src="/images/language.png"
              width={40}
              height={24}
              alt="language"
            />
            <p>Rus</p>
          </div>
        </div>
        <div className=" flex justify-between items-center px-32">
          <nav className=" flex gap-6 font-medium text-sm  max-w-1170:hidden">
            <a href="#" className="">
              Категории
            </a>
            <a href="#">Покупателям</a>
            <a href="#">Бренд</a>
            <a href="#">Блог</a>
          </nav>
          <div className=" hidden  max-w-1170:flex">
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
          <div className=" flex items-center gap-14">
            <div>
              <Image
                src="/images/riera.png"
                alt="riera"
                width={101}
                height={34.4}
              />
            </div>
          </div>
          <div className=" flex gap-6 items-center">
            <div className=" flex items-center max-w-680:hidden">
              <Image
                src="/images/search.png"
                alt="search"
                width={18}
                height={18}
              />
              <input
                type="text"
                placeholder="Search..."
                className=" text-[18px] "
              />
            </div>
            <div className=" flex gap-5 max-w-680:hidden">
              <Image
                src="/images/bag.png"
                alt="icon"
                width={24}
                height={24}
                className="hover:cursor-pointer hover:border"
              />
              <Image
                src="/images/heart.png"
                alt="icon"
                width={24}
                height={24}
                className="hover:cursor-pointer hover:border"
              />
              <Image
                src="/images/human.png"
                alt="icon"
                width={24}
                height={24}
                className="hover:cursor-pointer hover:border"
              />
            </div>
          </div>
        </div>
        <div className=" text-white bg-black h-12 flex items-center justify-center">
          <h3 className=" text-[18px] font-medium animate-pulse tracking-widest">
            Скидки будут всю весну ! ! !
          </h3>
        </div>
      </div>
    </header>
  );
}
