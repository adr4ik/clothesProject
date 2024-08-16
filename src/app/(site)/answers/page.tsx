import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <section className=" max-w-[1170px] mx-auto  px-3 py-3 ">
      <nav className=" flex gap-5 py-5  ">
        <Link href="/">Главная</Link>
        <p>/</p>
        <Link href="/">Q&A</Link>
      </nav>
      <div>
        <h1 className=" text-5xl font-bold text-center py-3">
          Ответы на самые популярные вопросы
        </h1>
        <div className=" flex max-w-[1170px] mt-16 justify-between ">
          <div className=" flex flex-col justify-between max-w-[40%]">
            <div className=" flex flex-col ">
              <h2 className=" text-3xl font-semibold">
                Есть ли у вас возврат?
              </h2>
              <p className=" text-[#666666]">
                Конечно. И у нас самая простая и легкая процедура возврата. Мы
                все подскажем и пойдем всегда навстречу согласно нашей политики
                повышенной клиентоориентированности.
              </p>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Какая гарантия на обувь?</AccordionTrigger>
                  <AccordionContent>
                    <p className=" text-[#666666]">No Garanty</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Подгоняете ли одежду? </AccordionTrigger>
                  <AccordionContent>
                    <p className=" text-[#666666]">
                      Да, у нас собственное швейное ателье и подгонка вещей
                      бренда бесплатно
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Обувь кожаная?  </AccordionTrigger>
                  <AccordionContent>
                    <p className=" text-[#666666]">
                      Да, у нас собственное швейное ателье{" "}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className=" flex flex-col">
              <h2 className=" text-3xl font-semibold">
                Есть ли онлайн-доставка?
              </h2>
              <p className=" text-[#666666]">
                Да, от 2 до 3 дней по Москве и Санкт-Петербурну. До 8 рабочих
                дней по другим регионам России. Стоимость рассчитывается
                индивидуально (но не более 15% от суммы заказа)
              </p>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Бывают ли у вас акции и скидки?   
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className=" text-[#666666]">
                      Да, у нас собственное швейное ателье{" "}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div>
            <Image
              src="/images/answer.png"
              alt="answers"
              width={470}
              height={626}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
