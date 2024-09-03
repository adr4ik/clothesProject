import React from "react";
import Filters from "./components/filters";
import ProductsList from "./components/products-list";
import { ProductsPagination } from "./components/pagination";

export default function page() {
  return (
    <div className=" max-w-[1170px] mx-auto px-3 pt-5">
      <div className=" flex items-start justify-between max-[430px]:flex max-[430]:">
        <Filters />
        <ProductsList />
      </div>
      <ProductsPagination />
    </div>
  );
}
