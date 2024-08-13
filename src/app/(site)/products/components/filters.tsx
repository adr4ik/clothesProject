import React from "react";
import Radiogroup from "./radiogroup";

export default function Filters() {
  return (
    <aside className=" w-[15s%] flex flex-col gap-10">
      <div>
        <h1 className=" text-3xl font-bold">Filters</h1>
      </div>
      <div className=" flex flex-col gap-3">
        <Radiogroup />
      </div>
    </aside>
  );
}
