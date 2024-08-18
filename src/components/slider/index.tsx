"use client";

import { IProduct } from "@/utils/interfaces";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ProductCard from "../product-card";
import { BASE_URL } from "@/utils/constants";
import { Skeleton } from "../ui/skeleton";

export default function ProductsSlider() {
  const [products, setProducts] = useState<IProduct[]>([]);

  const fetchData = async () => {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const settings = {
    dots: true,
    infinite: false,
    speed: 1500,
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

  if (!products.length) {
    return (
      <div className="slider-container max-w-max ">
        <Slider {...settings}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Slider>
      </div>
    );
  }

  return (
    <div className="slider-container max-w-max ">
      <Slider {...settings}>
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </Slider>
    </div>
  );
}
