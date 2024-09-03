"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { IBlog } from "@/utils/interfaces";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function BlogCard({ product }: { product?: IBlog }) {
  const router = useRouter();
  if (!product) {
    return <Skeleton className=" w-[270px] h-[360px] " />;
  }
  return (
    <div
      className=" m-w-[270px] text-center"
      onClick={() => router.push(`/blogPage/${product.id}`)}
    >
      <div>
        <Image
          src={product.image as string}
          alt="product image"
          width={370}
          height={278}
        />
      </div>
      <div className=" mt-4">
        <p className=" text-sm leading-5 mb-2">{product.date}</p>
        <p className=" text-lg max-w-[338px]">{product.name} </p>
      </div>
    </div>
  );
}
