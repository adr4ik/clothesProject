import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function DetailsPage() {
  return (
    <section className=" max-w-[1170px] mx-auto  px-3 py-3 ">
      <nav className=" flex gap-5 py-5">
        <Link href="/">Главная</Link>
        <p>/</p>
        <Link href="/">Коричневый костюм-скинни в клетку DESIGN</Link>
      </nav>
      <div className=" flex">
        <div className=" flex flex-col">
          <Image src="/images/braun/1.png" alt="1" width={70} height={93} />
          <Image src="/images/braun/2.png" alt="2" width={70} height={93} />
          <Image src="/images/braun/3.png" alt="3" width={70} height={93} />
          <Image src="/images/braun/4.png" alt="4" width={70} height={93} />
        </div>
        <div>
          <Image
            src="/images/braun/Big.png"
            alt="Big"
            width={570}
            height={760}
          />
        </div>
        <div className=" flex flex-col justify-between max-w-430px">
          <div className=" font-semibold text-2xl flex flex-col gap-5">
            <h2>DESIGN Коричневый костюм-скинни в клетку </h2>
            <p>12 000 ₽</p>
          </div>
          <div className=" flex flex-col gap-4">
            <div className=" flex flex-col gap-3">
              <p className=" font-semibold flex gap-3">
                Цвет <span className=" text-[#666666]">Белый</span>
              </p>
              <div className=" flex gap-5">
                <button className=" bg-[#1B2248] px-3 py-3 border"></button>
                <button className=" bg-white px-3 py-3 border"></button>
                <button className=" bg-[#EEEEEE] px-3 py-3 border"></button>
                <button className=" bg-[#9F0B0B] px-3 py-3 border"></button>
              </div>
            </div>
            <div className=" flex justify-between">
              <p className=" flex font-semibold gap-3">
                Размер <span className=" text-[#666666]">S</span>
              </p>
              <p className=" font-semibold">Таблица размеров</p>
            </div>
            <div className=" flex gap-3">
              <button className=" bg-white px-4 py-1 flex flex-col font-semibold border ">
                44-176 <span className=" text-[#666666]">44-176</span>
              </button>
              <button className=" bg-white px-4 py-1 flex flex-col font-semibold border">
                44-176 <span className=" text-[#666666]">44-176</span>
              </button>
              <button className=" bg-white px-4 py-1 flex flex-col font-semibold border">
                44-176 <span className=" text-[#666666]">44-176</span>
              </button>
              <button className=" bg-white px-4 py-1 flex flex-col font-semibold border">
                44-176 <span className=" text-[#666666]">44-176</span>
              </button>
              <button className=" bg-white px-4 py-1 flex flex-col font-semibold border">
                44-176 <span className=" text-[#666666]">44-176</span>
              </button>
            </div>
            <div>
              <a href="#" className=" font-semibold">
                Показать все размеры
              </a>
            </div>
            <div>
              <p className=" font-semibold">Количество</p>
            </div>
          </div>
          <div className=" flex flex-col ">
            <button className=" px-10 py-4 bg-[#2C3453] text-white border ">
              В корзину
            </button>
            <button className=" px-10 py-4 bg-white text-black border">
              Купить сразу
            </button>
          </div>
          <div className=" flex items-center justify-center gap-3">
            <Image src="/images/heart.png" alt="heart" width={14} height={12} />
            <p>В избранное</p>
          </div>
          <div className=" flex flex-col ">
            <p>
              Артикул: <span className=" font-semibold">051</span>
            </p>
            <p>
              Категория: <span className=" font-semibold">Костюмы</span>
            </p>
          </div>
        </div>
      </div>
      <nav className=" flex mx-auto justify-between py-10 font-bold px-5 max-w-[890px]">
        <Link href="#">Описание</Link>
        <Link href="#">Особенности & Детали</Link>
        <Link href="#">Доставка & Возврат</Link>
        <Link href="#">Отзывы</Link>
      </nav>
      <div className=" max-w-[890px] mx-auto py-3">
        <p>
          DESIGN – ваш проводник всех последних тенденций, независимо от того,
          кто вы, откуда и чем занимаетесь. Эксклюзивно для ASOS, наш
          универсальный бренд доступен для вас в версиях Plus и Tall. Создано
          нами, стилизовано вами.
        </p>
      </div>
      <div>
        <h2 className=" font-bold text-center text-3xl py-8">Похожие товары</h2>
      </div>
    </section>
  );
}
