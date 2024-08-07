import React from "react";
import BlogCard from "./blog-card";
import BlogSlider from "./blogSlider";

export default function Blog() {
  return (
    <main>
      <div className=" flex flex-col gap-7 ml-24 mr-24">
        <div>
          <h2 className=" text-3xl font-medium text-center">Блог</h2>
        </div>
        <div>
          <BlogSlider BlogProducts={BlogProducts} />
        </div>
      </div>
    </main>
  );
}

const BlogProducts = [
  {
    id: "1",
    image: "",
    date: "",
    name: "",
  },
  {
    id: "1",
    image: "",
    date: "",
    name: "",
  },
  {
    id: "1",
    image: "",
    date: "",
    name: "",
  },
  {
    id: "1",
    image: "",
    date: "",
    name: "",
  },
  {
    id: "1",
    image: "",
    date: "",
    name: "",
  },
  {
    id: "1",
    image: "",
    date: "",
    name: "",
  },
  {
    id: "1",
    image: "",
    date: "",
    name: "",
  },
  {
    id: "1",
    image: "",
    date: "",
    name: "",
  },
];
