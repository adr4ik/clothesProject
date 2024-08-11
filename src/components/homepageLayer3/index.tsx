import Image from "next/image";
import React from "react";

export default function HomepageLayer3() {
  return (
    <section className=" flex flex-wrap gap-10 mt-10 justify-center ">
      <div className=" flex  gap-10 items-center max-[650px]:max-w-[390px] max-[650px]:max-h-[165px]">
        <div>
          <Image
            src="/images/layer3pic.png"
            alt="layer3pic"
            width={188}
            height={240}
          />
        </div>
        <div className=" flex flex-col gap-2">
          <h3 className=" text-2xl font-medium">Свадебные костюмы</h3>
          <p className=" text-sm">Почувствуй комофрт</p>
          <button className=" bg-[#2C3453] px-10 py-4 text-white max-[650px]:px-5 max-[650px]:py-3 text-sm">
            Перейти к коллекции
          </button>
        </div>
      </div>
      <div className=" flex gap-10 items-center max-[650px]:flex-col ">
        <div>
          <Image
            src="/images/layer3pic2.png"
            alt="layer3pic"
            width={188}
            height={240}
          />
        </div>
        <div className=" flex flex-col gap-2 max-[650px]:items-center ">
          <h3 className=" text-2xl font-medium">Свадебные костюмы</h3>
          <p className=" text-sm">Почувствуй комофрт</p>
          <button className=" bg-[#2C3453] px-10 py-4 text-white max-[650px]:w-full ">
            К покупкам
          </button>
        </div>
      </div>
    </section>
  );
}
