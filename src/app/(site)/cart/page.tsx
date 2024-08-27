import React, { useEffect } from "react";
import { CartEnd, ProductsCartTable } from "./components";
import ProductsSlider from "@/components/slider";
import Link from "next/link";

export default function Cart() {
  return (
    <div className=" mx-auto max-w-content">
      <nav className=" flex gap-5 py-5  ">
        <Link href="/">Главная</Link>
        <p>/</p>
        <Link href="/">Корзина</Link>
      </nav>
      <div className=" text-center py-5">
        <h1 className=" text-5xl font-bold">Моя корзина</h1>
        <p>Товары резервируются на 60 минут.</p>
      </div>
      <div className=" flex items-center justify-between gap-5 max-md:flex-col">
        <ProductsCartTable />
        <CartEnd />
      </div>
      <div className=" text-center py-5 flex flex-col gap-7">
        <h1 className=" text-5xl font-bold">Популярные товары</h1>
        <ProductsSlider />
      </div>
    </div>
  );
}
