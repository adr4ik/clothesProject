import React from "react";

export default function HomepageLayer2() {
  return (
    <section className=" max-w-[1170px] mx-auto ">
      <div
        className=" flex flex-col gap-5 items-center justify-center"
        style={{
          backgroundImage: "url(../images/layer2bg.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",

          height: "50vh",
        }}
      >
        <h1 className=" text-[40px] text-white">Весеняя Коллекция 2024</h1>
        <button className=" px-10 py-4 bg-white text-sm text-center">
          Посмотреть коллекцию
        </button>
      </div>
    </section>
  );
}
