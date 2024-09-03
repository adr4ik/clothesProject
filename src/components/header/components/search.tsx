"use client";

import api from "@/requester";
import { BASE_URL } from "@/utils/constants";
import { IProduct } from "@/utils/interfaces";
import { currencyFormat } from "@/utils/utils";
import { Heading1 } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { debounce } from "lodash";

export default function HeaderSearch() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const searchParams = useSearchParams();

  const fetchData = useCallback(
    debounce(async (inputValue: string) => {
      setLoading(true);
      let res = await fetch(`${BASE_URL}?q=${inputValue}`);
      let data = await res.json();
      setLoading(false);

      if (inputValue.trim()) {
        setProducts(data);
      } else {
        setProducts([]);
      }
    }, 500),
    [search]
  );

  function handleNavigate(id: string) {
    router.push(`/products/${id}`);
    setSearch("");
  }

  return (
    <div className=" bg-[#1E2827] ">
      <input
        value={search}
        type="text"
        placeholder="Search.."
        className=" pl-3 py-3 w-full outline-none text-black"
        onChange={(e) => {
          setSearch(e.target.value);
          fetchData(e.target.value);
        }}
      />
      {search.trim() && (
        <div className=" absolute bg-white p-5 left-0 right-[-144px] max-h-96 overflow-scroll flex flex-col gap-2">
          {loading ? (
            <h1>Loading..</h1>
          ) : products.length > 0 ? (
            products.map((item) => (
              <div
                className=" flex items-center gap-5 hover:bg-green-100 cursor-pointer"
                onClick={() => handleNavigate(item.id)}
              >
                <Image
                  src="/images/Img.png"
                  alt="img"
                  width={100}
                  height={150}
                />
                <div className=" flex flex-col gap-1">
                  <span>{item.name}</span>
                  <span>{currencyFormat.format(item.price)}</span>
                </div>
              </div>
            ))
          ) : (
            <h1>Products not found</h1>
          )}
        </div>
      )}
    </div>
  );
}
