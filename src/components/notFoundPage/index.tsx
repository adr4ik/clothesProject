import Image from "next/image";
import React from "react";

export default function NotFoundPage() {
  return (
    <section>
      <div className=" flex max-[980px]:flex-col">
        <div className=" w-full">
          <Image
            src="/images/notfound.png"
            alt="notfound"
            width={695}
            height={592}
            className=" w-full"
          />
        </div>
        <div
          className=" bg-black  flex justify-start
         items-center w-full"
        >
          <div className=" flex flex-col max-w-[527px] gap-10 pl-10">
            <h2 className=" text-2xl text-[#999999]">Ошибка 404...</h2>
            <h1 className=" text-5xl font-bold text-white">
              Страница не найдена
            </h1>
            <h3 className="  text-[#999999]">
              Мы повсюду искали эту страницу Вы уверены, что URL-адрес сайта
              правильный?
            </h3>
            <button className=" px-10 py-[14px] text-center bg-white text-sm max-w-[270px]">
              Вернуться на главную
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
