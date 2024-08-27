"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CloseIcon from "@/lib/icons/close";
import { Cart } from "@/utils/interfaces";
import useCart from "@/utils/useCart";
import { currencyFormat } from "@/utils/utils";
import { Minus, Plus, RotateCw } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";

export function ProductsTable() {
  const { changeCartProductCount, deleteCartProduct, getCart, cart } =
    useCart();

  useEffect(() => {
    getCart();
  }, []);

  if (!cart.products.length) {
    return <h1>Корзина пуста</h1>;
  }
  return (
    <div className=" max-w-[753px] ">
      <Table className=" relative ">
        <TableHeader>
          <TableRow>
            <TableHead className=" text-base p-10">Товар</TableHead>
            <TableHead className=" text-base">Цена</TableHead>
            <TableHead className=" text-base">Размер</TableHead>
            <TableHead className=" text-base">Количество</TableHead>
            <TableHead className=" text-base">Цена</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cart.products.map((item) => (
            <TableRow key={item.product.id}>
              <TableCell className=" flex items-center gap-x-2 px-10 ">
                <Button
                  variant="ghost"
                  className=" p-2 h-auto absolute left-1"
                  onClick={() => deleteCartProduct(item.product.id)}
                >
                  <CloseIcon />
                </Button>
                <Image
                  src="/images/braun/1.png"
                  alt="product image"
                  width={100}
                  height={133}
                />
                <span className=" text-base max-w-44">
                  {" "}
                  {item.product.name}
                </span>
              </TableCell>
              <TableCell className=" w-[105px]">
                <span className=" text-base">
                  {currencyFormat.format(item.product.price)}
                </span>
              </TableCell>
              <TableCell>
                <span className="text-base">{item.product.sizes[0]}</span>
              </TableCell>
              <TableCell>
                <div className=" flex items-center gap-x-2">
                  <Button
                    variant="ghost"
                    className=" p-1 h-auto"
                    onClick={() =>
                      changeCartProductCount(item.count - 1, item.product.id)
                    }
                  >
                    <Minus />
                  </Button>
                  <span className=" text-base font-bold">{item.count}</span>
                  <Button
                    variant="ghost"
                    className=" p-1 h-auto"
                    onClick={() =>
                      changeCartProductCount(item.count + 1, item.product.id)
                    }
                  >
                    <Plus />
                  </Button>
                </div>
              </TableCell>
              <TableCell className=" w-[105px]">
                <span className=" text-base">
                  {currencyFormat.format(item.subPrice)}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell colSpan={5} className=" px-10">
              <div className=" flex items-center justify-between ">
                <Button
                  variant="ghost"
                  className=" p-2 h-auto flex items-center gap-x-2"
                >
                  <RotateCw />

                  <span> Обновить корзину</span>
                </Button>

                <div className=" flex gap-x-10 items-center">
                  <p className=" text-base ">Общая цена</p>
                  <span className=" text-base font-bold">
                    {currencyFormat.format(cart.totalPrice)}₽
                  </span>
                </div>
              </div>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
