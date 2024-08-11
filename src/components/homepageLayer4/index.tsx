import Image from "next/image";
import React from "react";

export default function HomepageLayer4() {
  return (
    <section className=" flex mt-5 items-center justify-center max-[400px]:flex-col ">
      <div className=" flex flex-col items-center gap-7 w-[calc(100%/3)] aspect-square object-cover max-[400px]:order-1 max-[400px]:w-full">
        <Image
          src="/images/Layer4pic1.png"
          alt="layer4"
          width={480}
          height={640}
        />
        <h3 className=" text-lg font-semibold max-[400px]:py-6">STYLE</h3>
      </div>
      <div className=" flex flex-col items-center gap-7 w-[calc(100%/3)] aspect-square object-cover max-[400px]:order-3 max-[400px]:w-full">
        <h3 className=" text-lg font-semibold max-[400px]:order-2 max-[400px]:py-6">
          CONFIDENCE
        </h3>
        <Image
          src="/images/Layer4pic2.png"
          alt="layer4"
          width={480}
          height={640}
          className=" max-[400px]:order-1"
        />
      </div>
      <div className=" flex flex-col items-center gap-7 w-[calc(100%/3)] aspect-square object-cover max-[400px]:order-2 max-[400px]:w-full ">
        <Image
          src="/images/Layer4pic3.png"
          alt="layer4"
          width={480}
          height={640}
        />
        <h3 className=" text-lg font-semibold max-[400px]:py-6">STATUS</h3>
      </div>
    </section>
  );
}
