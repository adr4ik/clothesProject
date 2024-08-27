"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IProduct } from "@/utils/interfaces";
import { BASE_URL } from "@/utils/constants";

export default function EditProductPage() {
  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${BASE_URL}/${productId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data: IProduct = await response.json();
        setProduct(data);
      } catch (err) {
        setError((err as Error).message || "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!product) return; // No product data available

    const updatedProduct: Partial<IProduct> = {
      name: product.name,
      price: product.price,
      old_price: product.old_price,
      material_color: product.material_color,
      sizes: product.sizes,
      count: product.count,
      articul: product.articul,
      category: product.category,
    };

    try {
      const response = await fetch(`${BASE_URL}/${productId}`, {
        method: "PUT", // or PATCH depending on your API
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      });

      if (!response.ok) {
        throw new Error("Failed to update product");
      }

      router.push("/products");
    } catch (err) {
      setError((err as Error).message || "An unknown error occurred");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <main className="bg-[#F5F6F8] h-screen flex items-center">
      <div className="w-[480px] mx-auto bg-white p-10">
        <h1 className="text-center font-bold text-lg">Edit Product</h1>

        {product && (
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={product.name}
                  onChange={(e) =>
                    setProduct({ ...product, name: e.target.value })
                  }
                  className="col-span-3"
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="price" className="text-right">
                  Price
                </Label>
                <Input
                  id="price"
                  type="number"
                  value={product.price}
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      price: parseFloat(e.target.value),
                    })
                  }
                  className="col-span-3"
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="old_price" className="text-right">
                  Old Price
                </Label>
                <Input
                  id="old_price"
                  type="number"
                  value={product.old_price}
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      old_price: parseFloat(e.target.value),
                    })
                  }
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="material_color" className="text-right">
                  Material Color
                </Label>
                <Input
                  id="material_color"
                  value={product.material_color}
                  onChange={(e) =>
                    setProduct({ ...product, material_color: e.target.value })
                  }
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Sizes</Label>
                <div className="col-span-3 flex flex-col gap-2">
                  {product.sizes.map((size, index) => (
                    <Input
                      key={index}
                      value={size}
                      onChange={(e) => {
                        const newSizes = [...product.sizes];
                        newSizes[index] = e.target.value;
                        setProduct({ ...product, sizes: newSizes });
                      }}
                    />
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() =>
                      setProduct({ ...product, sizes: [...product.sizes, ""] })
                    }
                  >
                    Add Size
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="count" className="text-right">
                  Count
                </Label>
                <Input
                  id="count"
                  type="number"
                  value={product.count}
                  onChange={(e) =>
                    setProduct({ ...product, count: e.target.value })
                  }
                  className="col-span-3"
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="articul" className="text-right">
                  Articul
                </Label>
                <Input
                  id="articul"
                  value={product.articul}
                  onChange={(e) =>
                    setProduct({ ...product, articul: e.target.value })
                  }
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="category" className="text-right">
                  Category
                </Label>
                <Input
                  id="category"
                  value={product.category}
                  onChange={(e) =>
                    setProduct({ ...product, category: e.target.value })
                  }
                  className="col-span-3"
                  required
                />
              </div>
            </div>
            <Button type="submit">Edit Product</Button>
          </form>
        )}
      </div>
    </main>
  );
}
