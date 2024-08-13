import InstagramIcon from "@/lib/icons/instagram";
import TelegramIcon from "@/lib/icons/telegram";
import TwitterIcon from "@/lib/icons/twitter";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <section>
      <nav className=" flex max-w-[1170px] gap-6 h-12 items-center mx-auto px-3  py-3">
        <a href="">Главная</a>
        <p>/</p>
        <a href="">Блог</a>
        <p>/</p>
        <a href="">Исскуство выбора обуви</a>
      </nav>

      <div
        className=" flex flex-col gap-5 items-center justify-center"
        style={{
          backgroundImage: "url(../images/detailsBlog1.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",

          height: "50vh",
        }}
      >
        <p className=" text-white">Май 15, 2024</p>
        <h1 className="  text-5xl text-white font-bold max-[620px]:text-2xl">
          Исскуство выбора обуви
        </h1>
      </div>

      <div
        className=" flex flex-col max-w-[1170px] mx-auto px-3  py-3 items-center gap-7 mt-10
      "
      >
        <p className=" max-w-[770px]">
          Выбор определенного типа обуви может сказать о многом о вашем стиле и
          предпочтениях. Среди мужской обуви самыми популярными и классическими
          моделями считаются Оксфорды, дерби, броги и монки. Интересно
          разобраться, в чем заключаются основные отличия между этими видами
          обуви.
        </p>
        <Image
          src="/images/detailsBlog2.png"
          alt="detailsBlog2"
          width={770}
          height={577}
        />
      </div>

      <div className=" flex flex-col max-w-[1170px] mx-auto px-3  py-3 items-center gap-7 mt-6">
        <h3 className=" text-2xl ">
          Стильные акценты: как подобрать идеальную пару
        </h3>
        <p className=" max-w-[770px] text-[#666666]">
          Итак, стоит помнить, что правильный выбор обуви является важным
          аспектом вашего образа. Каждый вид обуви имеет свои уникальные
          особенности и предназначен для определенных ситуаций. Оксфорды
          подходят для более строгих и формальных случаев, дерби — для
          повседневной носки, броги — для оригинального и стильного вида.
        </p>
      </div>
      <div className=" flex max-w-[1170px] mx-auto px-3 py-3 gap-7 mt-6 justify-center max-[1100px]:flex-col items-center">
        <Image
          src="/images/detailsBlog3.png"
          alt="dtB3"
          width={570}
          height={427}
        />
        <Image
          src="/images/detailsBlog4.png"
          alt="dtB3"
          width={570}
          height={427}
        />
      </div>
      <div>
        <p className=" max-w-[770px] text-[#666666] mx-auto mt-5">
          Выбирая обувь, обращайте внимание не только на красивый внешний вид,
          но и на удобство и качество материалов. Ведь хорошая обувь — это не
          только стильно, но и комфортно.
        </p>
      </div>
      <div className=" flex flex-col gap-3 max-w-[664px]  mx-auto mt-10">
        <h3 className=" text-3xl font-medium ">
          «Мои ноги вовсе не так красивы, как вы думаете, — просто я знаю, что с
          ними делать»
        </h3>
        <div className=" flex items-center gap-5">
          <hr className=" w-10 bg-[#1D1E1F] h-1" />
          <p>Марлен Дитрих</p>
        </div>
        <div className="  flex  max-w-[756px]  mx-auto mt-10">
          <p>
            В заключении, хочется отметить, что выбор мужских туфель зависит от
            вашего стиля, предпочтений и события, на которое вы собираетесь их
            надеть. Выбирайте идеальную пару мужских классических туфель,
            которая подчеркнет вашу индивидуальность и станет неотъемлемой
            частью вашего образа.{" "}
          </p>
        </div>
        <div className="flex  max-w-[756px] mt-10 justify-between max-[400px]:flex-col max-[400px]:gap-5">
          <nav className=" flex gap-5">
            <a href="">Теги</a>
            <a href="">Обувь</a>
            <a href="">Стиль</a>
          </nav>
          <nav className=" flex gap-5 items-center">
            <a href="">Поделиться</a>
            <InstagramIcon />
            <TelegramIcon />
            <TwitterIcon />
          </nav>
        </div>
        <div className=" flex flex-col max-w-[770px] mt-12 gap-5">
          <div className=" flex justify-between max-[400px]:flex-col gap-3 ">
            <div className=" w-full flex flex-col gap-3">
              <h3 className=" font-semibold">Имя</h3>
              <input
                placeholder="Введите свое имя"
                className=" w-full outline-none  text-[#666666] text-sm"
              />
            </div>
            <div className=" w-full flex flex-col gap-3">
              <h3 className=" font-semibold">Email</h3>
              <input
                placeholder="Введите свой email"
                className=" w-full outline-none  text-[#666666] text-sm"
              />
            </div>
          </div>
          <div className=" flex flex-col gap-3">
            <h3 className=" font-semibold"> Сообщение</h3>
            <textarea
              placeholder="Введи те свое сообщение"
              className=" w-full outline-none  text-[#666666] text-sm"
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
