"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BASE_URL } from "@/utils/constants";
import { IProduct } from "@/utils/interfaces";
import useAuth from "@/utils/useAuth";
import useCart from "@/utils/useCart";
import { currencyFormat } from "@/utils/utils";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const fetchData = async (id: string): Promise<IProduct> => {
  const res = await fetch(`${BASE_URL}/${id}`);
  const data = await res.json();
  return data;
};

const images = [
  {
    src: "/images/braun/1.png",
    alt: "image1",
  },
  {
    src: "/images/braun/2.png",
    alt: "image2",
  },
  {
    src: "/images/braun/3.png",
    alt: "image3",
  },
  {
    src: "/images/braun/4.png",
    alt: "image4",
  },
  {
    src: "/images/braun/Big.png",
    alt: "image5",
  },
];

export default function DetailsPage({ params }: { params: { id: string } }) {
  const [activeImage, setActiveImage] = useState(images[4]);
  const [isInCart, setIsInCart] = useState(false);
  const { addProductToCart, checkProductInCart, cart } = useCart();

  const { authListener, user } = useAuth();

  useEffect(() => {
    authListener();
  }, []);

  const router = useRouter();

  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetchData(params.id),
  });

  useEffect(() => {
    if (data) {
      setIsInCart(checkProductInCart(data));
    }
  }, [data]);

  if (isLoading || !data) {
    return <h1>Loading ...</h1>;
  }
  return (
    <section className=" max-w-[1170px] mx-auto  px-3 py-3 ">
      <nav className=" flex gap-5 py-5  ">
        <Link href="/">Главная</Link>
        <p>/</p>
        <Link href={`/products/${params.id}`}>{data.name}</Link>
      </nav>
      <div className=" flex max-[630px]:flex-col">
        <div className=" flex ">
          <div className=" flex flex-col gap-y-3 ">
            {images.map((image, i) => (
              <Image
                key={i}
                src={image.src}
                alt="1"
                width={70}
                height={93}
                className={`cursor-pointer border ${
                  image.src === activeImage.src
                    ? " border-black"
                    : "border-gray-300"
                }`}
                onClick={() => setActiveImage(image)}
              />
            ))}
          </div>
          <div className=" mx-5">
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              width={570}
              height={760}
            />
          </div>
        </div>
        <div className=" flex flex-col justify-between w-1/2 max-[630px]:w-full ">
          <div className=" font-semibold text-2xl flex flex-col gap-5">
            <h2>{data.name} </h2>
            <p>{currencyFormat.format(data.price)}</p>
          </div>
          <div className=" flex flex-col gap-4">
            <div className=" flex flex-col gap-3">
              <p className=" font-semibold flex gap-3">
                Цвет{" "}
                <span className=" text-[#666666]">{data.material_color}</span>
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
              {data.sizes.length &&
                data.sizes.map((size, i) => (
                  <button
                    key={i}
                    className=" bg-white px-4 py-1 flex flex-col font-semibold border "
                  >
                    <span className=" text-[#666666]">{size}</span>
                  </button>
                ))}
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
            <button
              className=" px-10 py-4 bg-[#2C3453] text-white border "
              onClick={() => {
                addProductToCart(data);
                setIsInCart(checkProductInCart(data));
              }}
            >
              {isInCart ? "Удалить с корзины" : "В корзину"}
            </button>

            {user?.admin && (
              <button
                className=" px-10 py-4 bg-white text-black border"
                onClick={() => router.push(`/editProduct?id=${data.id}`)}
              >
                Редактировать
              </button>
            )}
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
      <nav className=" flex mx-auto justify-between py-10 font-bold px-5 ">
        <Tabs defaultValue="account">
          <TabsList className="bg-white p-0 h-auto flex flex-wrap ">
            <TabsTrigger
              value="Описание"
              className="data-[state=active]:bg-[#F5F6F8] font-medium text-md px-10 py-3 data-[state=active]:shadow-none rounded-none"
            >
              Описание
            </TabsTrigger>
            <TabsTrigger
              value="Особенности"
              className="data-[state=active]:bg-[#F5F6F8] font-medium text-md px-10 py-3 data-[state=active]:shadow-none rounded-none"
            >
              Особенности & Детали
            </TabsTrigger>
            <TabsTrigger
              value="Доставка"
              className="data-[state=active]:bg-[#F5F6F8] font-medium text-md px-10 py-3 data-[state=active]:shadow-none rounded-none"
            >
              Доставка & Возврат
            </TabsTrigger>
            <TabsTrigger
              value="Отзывы"
              className="data-[state=active]:bg-[#F5F6F8] font-medium text-md px-10 py-3 data-[state=active]:shadow-none rounded-none"
            >
              Отзывы
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Описание" className="bg-[#F5F6F8] mt-0 p-10">
            DESIGN – ваш проводник всех последних тенденций, независимо от того,
            кто вы, откуда и чем занимаетесь. Эксклюзивно для ASOS, наш
            универсальный бренд доступен для вас в версиях Plus и Tall. Создано
            нами, стилизовано вами.
          </TabsContent>
          <TabsContent value="Особенности" className="bg-[#F5F6F8] mt-0 p-10">
            Change your password here.
          </TabsContent>
          <TabsContent value="Доставка " className="bg-[#F5F6F8] mt-0 p-10">
            Change your password here.
          </TabsContent>

          <TabsContent value="Отзывы" className="bg-[#F5F6F8] mt-0 p-10">
            Change your password here.
          </TabsContent>
        </Tabs>
      </nav>

      <div>
        <h2 className=" font-bold text-center text-3xl py-8">Похожие товары</h2>
      </div>
    </section>
  );
}
