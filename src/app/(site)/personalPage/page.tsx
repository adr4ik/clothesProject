"use client";

import AvatarIcon from "@/lib/icons/avatar";
import EditIcon from "@/lib/icons/edit";
import MailIcon from "@/lib/icons/mail";
import PhoneIcon from "@/lib/icons/phone";
import SearchIcon from "@/lib/icons/search";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { ProfileTable } from "./components/profiletable";
import useAuth from "@/utils/useAuth";

export default function page() {
  const { authListener, user } = useAuth();

  useEffect(() => {
    authListener();
  }, []);

  if (!user) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className=" max-w-[1170px] mx-auto px-3 py-3 bg-[url]">
      <nav className=" flex gap-5 py-5  ">
        <Link href="/">Главная</Link>
        <p>/</p>
        <Link href="/">Личный кабинет</Link>
      </nav>
      <div>
        <div
          style={{
            backgroundImage: "url(../images/personal.png)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "16vh",
          }}
        >
          <div className=" p-5">
            {user.user?.photoURL ? (
              <Image
                className=" rounded-full"
                src={user.user.photoURL}
                alt="photourl"
                width={150}
                height={150}
              />
            ) : (
              <AvatarIcon />
            )}
          </div>
        </div>
        <div className=" flex justify-between p-7 mt-3 max-[550px]:flex-col">
          <div className=" flex flex-col gap-10">
            <h3 className=" text-2xl">{user.user?.displayName}</h3>
            <div className=" flex items-center gap-3 ">
              <Link href="#" className=" flex gap-1 items-center">
                {" "}
                <MailIcon /> {user.user?.email}
              </Link>
              <Link href="#" className=" flex gap-1 items-center">
                {" "}
                <PhoneIcon /> +7(000) 000-8882
              </Link>
            </div>
          </div>
          <div className=" flex gap-2 items-center">
            <EditIcon />
            <p className=" cursor-pointer max-[550px]:hidden">Редактировать</p>
          </div>
        </div>
        <div className=" p-7 mt-3">
          <h2 className=" text-2xl font-bold">История заказов</h2>
          <p>Здесь можно отследить свою историю заказов</p>
        </div>
        <div className=" p-2 mt-8"></div>
        <div className=" p-7 mt-3">
          <ProfileTable />
        </div>
      </div>
    </section>
  );
}
