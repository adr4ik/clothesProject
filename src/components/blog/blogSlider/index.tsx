"use client";

import { IBlog } from "@/utils/interfaces";
import React from "react";
import Slider from "react-slick";
import BlogCard from "../blog-card";

export default function BlogSlider({
  BlogProducts,
}: {
  BlogProducts: IBlog[];
}) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
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
    <div className="slider-container max-w-max">
      <Slider {...settings}>
        {BlogProducts.map((item) => (
          <BlogCard key={item.id} />
        ))}
      </Slider>
    </div>
  );
}
