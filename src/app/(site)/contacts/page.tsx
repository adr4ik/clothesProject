import MapboxMap from "@/components/ui/MapBoxMap";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <section className=" max-w-[1170px] mx-auto  px-3 py-3 ">
      <nav className=" flex gap-5 py-5  ">
        <Link href="/">Главная</Link>
        <p>/</p>
        <Link href="/">Контанты</Link>
      </nav>
      <div className="  text-center py-3">
        <h1 className=" text-5xl font-bold">Контанты</h1>
        <p className=" py-5">
          Вопросы? Комментрии? Заполните форму ниже и наши менеджеры с вами
          свяжутся
        </p>
      </div>

      <div className=" w-full h-96">
        {" "}
        <MapboxMap />{" "}
      </div>

      <div className=" flex justify-center">
        <div className=" flex flex-col max-w-[770px] mt-12 gap-5 ">
          <div className=" flex justify-between max-[400px]:flex-col gap-3 ">
            <div className=" w-full flex flex-col gap-3">
              <h3 className=" font-semibold">Имя</h3>
              <input
                placeholder="Введите свое имя"
                className=" w-full outline-none   text-sm border px-3 py-4"
              />
            </div>
            <div className=" w-full flex flex-col gap-3">
              <h3 className=" font-semibold">Email</h3>
              <input
                placeholder="Введите свой email"
                className=" w-full outline-none   text-sm border px-3 py-4"
              />
            </div>
          </div>
          <div className=" flex flex-col gap-3">
            <h3 className=" font-semibold"> Сообщение</h3>
            <textarea
              placeholder="Введи те свое сообщение"
              className=" w-full outline-none text-sm h-44 border px-3 py-4"
            />
          </div>
          <div className=" flex flex-col  text-center mx-auto gap-3">
            <p className=" text-[#666666] text-sm">
              Обратите внимание: комментарии должны быть одобрены до их
              публикации.
            </p>
            <button className=" px-10 py-[14px] bg-black text-white text-center max-w-[520px]">
              Опубликовать
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
