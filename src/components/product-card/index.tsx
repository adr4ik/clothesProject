import { IProduct } from "@/utils/interfaces";

import { currencyFormat } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { Skeleton } from "../ui/skeleton";

export default function ProductCard({ product }: { product?: IProduct }) {
  const router = useRouter();
  if (!product) {
    return <Skeleton className=" w-[270px] h-[360px] " />;
  }
  return (
    <div className=" max-w-[270px] text-center">
      <div>
        <Image
          src="/images/Img.png"
          alt="productimage"
          width={270}
          height={360}
        />
      </div>
      <div
        className=" mt-4"
        onClick={() => router.push(`/products/${product.id}`)}
      >
        <p className=" text-lg leading-5 mb-2">
          Новейший костюм который можно носить каждый день
        </p>
        <div className=" flex items-center justify-center gap-2 text-xl font-medium">
          <span className=" text-[#999999] line-through">
            {currencyFormat.format(product.old_price)}
          </span>
          <span>{currencyFormat.format(product.price)}</span>
        </div>
      </div>
    </div>
  );
}
