"use client";

import BlogCard from "@/app/(site)/blogPage/components/blog-card";
import { BLOG_URL } from "@/utils/constants";
import { IBlog } from "@/utils/interfaces";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function BlogPage() {
  const [products, setProducts] = useState<IBlog[]>([]);

  const searchParams = useSearchParams();
  const router = useRouter();

  const fetchData = async () => {
    const res = await fetch(`${BLOG_URL}?${searchParams.toString()}`);
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, [searchParams]);

  if (!products.length) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className=" max-w-[1170px] px-3  py-3 gap-10 mx-auto">
      <div className=" text-5xl font-bold text-center p-5">
        <h1>Блог</h1>
      </div>
      <div className=" flex flex-wrap  gap-2 mt-8 items-start">
        {products.map((item) => (
          <BlogCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
}
