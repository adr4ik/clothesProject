import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import React from "react";

export function CartConfirm() {
  return (
    <div className=" max-w-[410px] flex flex-col items-center ">
      <Table className=" flex items-center ">
        <TableHeader>
          <TableRow className=" flex flex-col items-start ">
            <TableHead className=" text-base font-bold">
              Общая корзина
            </TableHead>
            <TableHead className=" text-base font-bold">Цена корзины</TableHead>
            <TableHead className=" text-base font-bold">Доставка</TableHead>
            <TableHead className=" text-base font-bold">Итог</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className=" flex flex-col ">
            <TableCell>
              <span className=" text-base font-bold">300₽ </span>
            </TableCell>
            <TableCell className=" flex flex-col">
              <RadioGroup
                defaultValue="Хлопок"
                className=" flex flex-col gap-3"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Хлопок" id="r1" />
                  <Label htmlFor="r1">Фиксированная доставка</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Полистер" id="r2" />
                  <Label htmlFor="r2">Бесплатная доставка</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Акрил" id="r3" />
                  <Label htmlFor="r3">Самовызов</Label>
                </div>
              </RadioGroup>
            </TableCell>
            <TableCell>
              <span className=" text-base font-bold">400₽</span>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Button variant="destructive" className=" bg-[#2C3453] px-20 py-4 ">
        Оформить заказ
      </Button>
    </div>
  );
}
