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
import { Minus, Plus, RotateCw } from "lucide-react";
import Image from "next/image";
import React from "react";

export function ProductsTable() {
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
          <TableRow>
            <TableCell className=" flex items-center gap-x-2 px-10 ">
              <Button variant="ghost" className=" p-2 h-auto absolute left-1">
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
                Бежевый костюм-жилет скинни с микротекстурой DESIGN
              </span>
            </TableCell>
            <TableCell className=" w-[105px]">
              <span className=" text-base">23 000P</span>
            </TableCell>
            <TableCell>
              <span className="text-base">44-176</span>
            </TableCell>
            <TableCell>
              <div className=" flex items-center gap-x-2">
                <Button variant="ghost" className=" p-1 h-auto">
                  <Minus />
                </Button>
                <span className=" text-base font-bold">1</span>
                <Button variant="ghost" className=" p-1 h-auto">
                  <Plus />
                </Button>
              </div>
            </TableCell>
            <TableCell className=" w-[105px]">
              <span className=" text-base">40 000</span>
            </TableCell>
          </TableRow>
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
                  <span className=" text-base font-bold">46 000 ₽</span>
                </div>
              </div>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
