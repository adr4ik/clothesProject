"use client";

import React from "react";
import Radiogroup from "./radiogroup";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Filters() {
  const searchParams = useSearchParams();
  const router = useRouter();

  function resetFilters() {
    const params = new URLSearchParams(searchParams);
    params.delete("material_color");
    params.delete("category");

    router.push(`/products?${params.toString()}`);
  }

  return (
    <aside className=" w-[15%] flex flex-col gap-10 ">
      <div className=" max-[430px]:hidden">
        <h1 className=" text-3xl font-bold">Filters</h1>
      </div>
      <div className=" flex flex-col gap-3">
        <Radiogroup />
        <Button
          onClick={resetFilters}
          className=" max-[430px]:text-sm max-[430px]:py-10 "
        >
          Reset <br className="min-[430px]:hidden" /> filters
        </Button>
      </div>
    </aside>
  );
}
