import Image from "next/image";
import React from "react";

export default function BlogCard() {
  return (
    <div className=" m-w-[270px] text-center">
      <div>
        <Image
          src="/images/blog1.png"
          alt="product image"
          width={370}
          height={278}
        />
      </div>
      <div className=" mt-4">
        <p className=" text-sm leading-5 mb-2">Май 15, 2020</p>
        <p className=" text-lg">Как носить джемпер? </p>
      </div>
    </div>
  );
}
