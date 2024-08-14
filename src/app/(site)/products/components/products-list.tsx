"use client";

import React, { useEffect, useState } from "react";
import { ProductsSelect } from "./select";

import { BASE_URL } from "@/utils/constants";
import { IProduct } from "@/utils/interfaces";
import ProductCard from "@/components/product-card";
import { useRouter, useSearchParams } from "next/navigation";

export default function ProductsList() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const searchParams = useSearchParams();
  const router = useRouter();

  const fetchData = async () => {
    const res = await fetch(`${BASE_URL}?${searchParams.toString()}`);
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, [searchParams]);

  if (!products.length) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="w-[75%]">
      <div className=" flex gap-3 justify-between">
        <h1 className=" text-3xl font-bold">Костюмы</h1>
        <div className=" flex items-center gap-3">
          <p>Сортировать</p>
          <ProductsSelect />
        </div>
      </div>
      <div className=" flex flex-wrap justify-start gap-2 mt-8">
        {products.map((item) => (
          <ProductCard key={item.id} />
        ))}
      </div>
    </div>
  );
}
