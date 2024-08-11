"use client";

import { IProduct } from "@/utils/interfaces";
import React from "react";
import Slider from "react-slick";
import ProductCard from "../product-card";

export default function ProductsSlider({ products }: { products: IProduct[] }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container max-w-max ">
      <Slider {...settings}>
        {products.map((item) => (
          <ProductCard key={item.id} />
        ))}
      </Slider>
    </div>
  );
}
