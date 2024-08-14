import LogoIcon from "@/lib/icons/logo";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <section>
      <div className=" max-w-[1170px] mx-auto px-3 py-3 bg-[url]">
        <nav className=" flex gap-4">
          <Link href="/">Главная</Link>
          <p>/</p>
          <Link href="/">О нас</Link>
        </nav>
        <div className=" flex flex-col gap-3">
          <h1 className=" text-5xl font-bold text-center">Наша миссия</h1>
          <p className=" text-center">
            RIERA - это не просто классика, это стиль жизни современного
            джентльмена.
          </p>
        </div>
        <div className=" py-5">
          <Image
            src="/images/about.png"
            alt="about"
            width={1170}
            height={658}
          />
        </div>
        <p>
          Мы убеждены, что классика - это намного больше, чем серьезные встречи
          и редкие торжества. Это полноценная часть повседневной жизни с такими
          ценными моментами, как время с семьей и друзьями, развлечения и
          путешествия. Именно этот аспект мы стремимся показать через качество и
          комфорт наших изделий.
        </p>
      </div>
      <div
        className=" w-full flex justify-center items-center"
        style={{
          backgroundImage: "url(../images/about2.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "16vh",
        }}
      >
        {" "}
        <LogoIcon />
      </div>
      <p className=" text-3xl font-bold py-5 text-center">Похожие товары</p>
    </section>
  );
}
