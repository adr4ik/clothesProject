import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProductCard() {
  return (
    <div className=" max-w-[270px] text-center">
      <div>
        <Link href="/Detailspage">
          <Image
            src="/images/Img.png"
            alt="product image"
            width={270}
            height={360}
          />
        </Link>
      </div>
      <div className=" mt-4">
        <p className=" text-lg leading-5 mb-2">
          Новейший костюм который можно носить каждый день
        </p>
        <div className=" flex items-center justify-center gap-2 text-xl font-medium">
          <span className=" text-[#999999] line-through">50 000 rub</span>
          <span> 20 000 rub</span>
        </div>
      </div>
    </div>
  );
}
