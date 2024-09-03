import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Cart } from "@/utils/interfaces";
import React from "react";

export function CartConfirm() {
  return (
    <div className="w-[400px] py-[30px] px-[35px] shadow-sm">
      <div>
        <h3 className="mb-8 font-bold text-lg max-md:text-center">
          Общая корзина
        </h3>
        <div className="flex items-center justify-between max-md:justify-around">
          <p className="font-bold text-base">Цена корзины</p>
          <span className="font-bold text-lg">300₽</span>
        </div>
      </div>

      <Separator className="my-4" />

      <div className="flex  max-md: justify-around">
        <p className="font-bold text-base">Доставка</p>
        <RadioGroup defaultValue="Хлопок" className=" flex flex-col gap-3">
          <div className="flex items-center space-x-2  ">
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
      </div>

      <Separator />

      <div className=" flex items-center justify-between max-md:justify-around">
        <p className="font-bold text-base max-md:text-sm">Итог</p>
        <span className="font-bold text-2xl max-md:text-lg">400₽</span>
      </div>
      <Button
        variant="ghost"
        className=" bg-[#2C3453] text-white font-bold tracking-[2px] rounded-none py-7 w-full mt-8"
      >
        Оформить заказ
      </Button>
    </div>
  );
}
