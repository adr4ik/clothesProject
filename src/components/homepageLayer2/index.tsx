import React from "react";

export default function HomepageLayer2() {
  return (
    <main className=" max-w-[1170px]">
      <div
        className=" flex flex-col gap-5 items-center justify-center"
        style={{
          backgroundImage: "url(../images/layer2bg.png)",
          backgroundSize: "contain",
          width: "100vh",

          height: "549px",
        }}
      >
        <h1 className=" text-[40px] text-white">Весеняя Коллекция 2024</h1>
        <button className=" px-10 py-4 bg-white text-sm text-center">
          Посмотреть коллекцию
        </button>
      </div>
    </main>
  );
}
