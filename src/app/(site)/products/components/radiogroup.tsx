import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import React from "react";

export default function Radiogroup() {
  return (
    <div>
      <div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Материал</AccordionTrigger>
            <AccordionContent>
              <RadioGroup
                defaultValue="Хлопок"
                className=" flex flex-col gap-3"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Хлопок" id="r1" />
                  <Label htmlFor="r1">Хлопок</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Полистер" id="r2" />
                  <Label htmlFor="r2">Полистер</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Акрил" id="r3" />
                  <Label htmlFor="r3">Акрил</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Вискоза" id="r4" />
                  <Label htmlFor="r4">Вискоза</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Лайкра" id="r5" />
                  <Label htmlFor="r5">Лайкра</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Шерсть" id="r6" />
                  <Label htmlFor="r6">Шерсть</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Полиамид" id="r7" />
                  <Label htmlFor="r7">Полиамид</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Эластан" id="r8" />
                  <Label htmlFor="r8">Эластан</Label>
                </div>
              </RadioGroup>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Цвет</AccordionTrigger>
            <AccordionContent>
              <RadioGroup
                defaultValue="Хлопок"
                className=" flex flex-col gap-3"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Черный" id="r9" />
                  <Label htmlFor="r9">Черный</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Белый" id="r10" />
                  <Label htmlFor="r10">Белый</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Бежевый" id="r11" />
                  <Label htmlFor="r11">Бежевый</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Коричневый" id="r12" />
                  <Label htmlFor="r12">Коричневый</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Синий" id="r13" />
                  <Label htmlFor="r13">Синий</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Серый" id="r14" />
                  <Label htmlFor="r14">Серый</Label>
                </div>
              </RadioGroup>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Цена</AccordionTrigger>
            <AccordionContent>
              <RadioGroup
                defaultValue="Хлопок"
                className=" flex flex-col gap-3"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="5 000-10 000" id="r14" />
                  <Label htmlFor="r14">5 000-10 000</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="10 000-20 000" id="r14" />
                  <Label htmlFor="r14">10 000-20 000</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="30 000-40 000" id="r14" />
                  <Label htmlFor="r14">30 000-40 000</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="50 000-70 000" id="r14" />
                  <Label htmlFor="r14">50 000-70 000</Label>
                </div>
              </RadioGroup>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
