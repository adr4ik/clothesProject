"use client";

import { IBlog } from "@/utils/interfaces";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import BlogCard from "../blog-card";
import { BLOG_URL } from "@/utils/constants";

export default function BlogSlider() {
  const [products, setProducts] = useState<IBlog[]>([]);

  const fetchData = async () => {
    const res = await fetch(BLOG_URL);
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
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

  if (!products.length) {
    return (
      <div className="slider-container max-w-max ">
        <Slider {...settings}>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </Slider>
      </div>
    );
  }
  return (
    <div className="slider-container max-w-max">
      <Slider {...settings}>
        {products.map((item) => (
          <BlogCard key={item.id} />
        ))}
      </Slider>
    </div>
  );
}
