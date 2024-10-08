"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BASE_URL } from "@/utils/constants";
import { useRouter } from "next/navigation";

export default function AddProductPage() {
  // Form state
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [materialColor, setMaterialColor] = useState("");
  const [sizes, setSizes] = useState<string[]>([""]);
  const [count, setCount] = useState("");
  const [articul, setArticul] = useState("");
  const [category, setCategory] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newProduct = {
      name,
      price: parseFloat(price), // Ensure price is a number
      old_price: parseFloat(oldPrice), // Ensure old_price is a number
      material_color: materialColor,
      sizes,
      count: parseInt(count, 10), // Ensure count is a number
      articul,
      category,
    };

    try {
      const res = await fetch(`${BASE_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (res.ok) {
        router.refresh(); // Refresh the page to show the new product
        setName("");
        setPrice("");
        setOldPrice("");
        setMaterialColor("");
        setSizes([""]);
        setCount("");
        setArticul("");
        setCategory("");
      } else {
        console.error("Failed to add product", res.statusText);
      }
    } catch (error) {
      console.error("Error adding product", error);
    }
    router.push("/products");
  };

  const handleSizeChange = (index: number, value: string) => {
    const newSizes = [...sizes];
    newSizes[index] = value;
    setSizes(newSizes);
  };

  const addSizeField = () => {
    setSizes([...sizes, ""]);
  };

  return (
    <main className="  bg-[#F5F6F8] h-screen flex items-center">
      <div className=" w-[480px] mx-auto bg-white p-10 ">
        <h1 className=" text-center font-bold text-lg">Add Product</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="col-span-3"
                required
                type="number"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="old_price" className="text-right">
                Old Price
              </Label>
              <Input
                id="old_price"
                value={oldPrice}
                onChange={(e) => setOldPrice(e.target.value)}
                className="col-span-3"
                type="number"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="material_color" className="text-right">
                Material Color
              </Label>
              <Input
                id="material_color"
                value={materialColor}
                onChange={(e) => setMaterialColor(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Sizes</Label>
              <div className="col-span-3 flex flex-col gap-2">
                {sizes.map((size, index) => (
                  <Input
                    key={index}
                    value={size}
                    onChange={(e) => handleSizeChange(index, e.target.value)}
                  />
                ))}
                <Button type="button" variant="outline" onClick={addSizeField}>
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
                value={count}
                onChange={(e) => setCount(e.target.value)}
                className="col-span-3"
                required
                type="number"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="articul" className="text-right">
                Articul
              </Label>
              <Input
                id="articul"
                value={articul}
                onChange={(e) => setArticul(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">
                Category
              </Label>
              <Input
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="col-span-3"
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Add Product</Button>
          </DialogFooter>
        </form>
      </div>
    </main>
  );
}
