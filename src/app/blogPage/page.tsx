import BlogCard from "@/components/blog/blog-card";
import Link from "next/link";
import React from "react";

export default function BlogPage() {
  return (
    <section className="  flex flex-col justify-between max-w-[1170px] mx-auto px-3  py-3 gap-10">
      <div className=" mx-auto text-5xl font-bold">
        <h1>Блог</h1>
      </div>
      <div className=" flex justify-between flex-wrap">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
}
