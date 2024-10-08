import Image from "next/image";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function Footer() {
  return (
    <footer className=" mt-24">
      <section className=" max-[880px]:hidden">
        <div>
          <h2 className=" text-center text-[32px] font-medium">
            Еще больше в наших соц сетях
          </h2>
        </div>
        <div className=" flex items-center justify-center gap-5 mt-5">
          <Image
            src="/images/telegram.png"
            alt="telegram"
            width={34}
            height={34}
          />
          <Image
            src="/images/youtube.png"
            alt="youtube"
            width={34}
            height={34}
          />
          <Image src="/images/vk.png" alt="vk" width={34} height={34} />
          <button className=" bg-[#2C3453] px-6 py-2 text-white text-[14px]">
            Запретграм*
          </button>
        </div>
        <div className=" flex flex-wrap mt-5 items-center justify-center">
          <Image
            src="/images/Footer1.png"
            alt="f1"
            width={240}
            height={240}
            className=" w-[calc(100%/6)] aspect-square object-cover"
          />
          <Image
            src="/images/Footer2.png"
            alt="f2"
            width={240}
            height={240}
            className=" w-[calc(100%/6)] aspect-square object-cover"
          />
          <Image
            src="/images/Footer3.png"
            alt="f3"
            width={240}
            height={240}
            className=" w-[calc(100%/6)] aspect-square object-cover"
          />
          <Image
            src="/images/Footer4.png"
            alt="f4"
            width={240}
            height={240}
            className=" w-[calc(100%/6)] aspect-square object-cover"
          />
          <Image
            src="/images/Footer5.png"
            alt="f5"
            width={240}
            height={240}
            className=" w-[calc(100%/6)] aspect-square object-cover"
          />
          <Image
            src="/images/Footer6.png"
            alt="f6"
            width={240}
            height={240}
            className=" w-[calc(100%/6)] aspect-square object-cover"
          />
        </div>

        <div className=" flex justify-between ml-24 mr-24 mt-10 text-lg">
          <div>
            <Image
              src="/images/RIERA.png"
              alt="rieralogo"
              width={135}
              height={25}
            />
          </div>
          <div className=" flex flex-col gap-5 max-w-[105px] text-center">
            <div>
              <p className=" font-medium">О компании</p>
            </div>
            <nav className=" flex flex-col gap-2">
              <a href="#">О нас</a>
              <a href="#">Котакты</a>
              <a href="#">ЧЗВ</a>
            </nav>
          </div>
          <div className=" flex flex-col gap-5 max-w-[94px]">
            <div>
              <p className=" font-medium">Категории</p>
            </div>
            <nav className=" flex flex-col gap-2">
              {" "}
              <a href="#">Костюмы</a>
              <a href="#">Пиджаки</a>
              <a href="#">Рубашки</a>
              <a href="#">Галстуки</a>
            </nav>
          </div>
          <div className=" flex flex-col gap-2 max-w-[347px]">
            <p className=" font-medium">
              Регистрируйтесь и получайте приятные бонусы от Riera
            </p>
            <div>
              <input type="text" placeholder="Эл. почта" />
              <button>Отправить</button>
            </div>
          </div>
        </div>

        <div className=" text-sm flex justify-between ml-24 mr-24 mt-12 items-center">
          <a href="#">© Design by ITMAG</a>
          <a href="#">Политика конфиденциальности</a>
          <a
            href="#"
            className=" max-w-[286px] text-[8px] uppercase max-h-[33px]"
          >
            * Организация Meta, а также ее продукты Instagram и Facebook, на
            которые мы ссылаемся в этой статье, признаны экстремистскими и
            запрещены на территории РФ.
          </a>
          <a href="#">Условия требования</a>
          <div className=" flex gap-5">
            <Image
              src="/images/paypal.png"
              alt="paypal"
              width={53}
              height={33}
            />
            <Image
              src="/images/discover.png"
              alt="discover"
              width={53}
              height={33}
            />
            <Image
              src="/images/payment3.png"
              alt="payment4"
              width={53}
              height={33}
            />
            <Image src="/images/amex.png" alt="amex" width={53} height={33} />
          </div>
        </div>
      </section>
      <section className="  mt-10 min-[880px]:hidden flex flex-col items-center gap-7">
        <div className=" flex flex-col gap-2 ">
          <p className=" font-medium">
            Регистрируйтесь и получайте приятные бонусы от Riera
          </p>
          <div>
            <input type="text" placeholder="Эл. почта" />
            <button>Отправить</button>
          </div>
        </div>
        <div className=" w-full max-w-[1170px] mx-auto px-3  py-3">
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>О компании</AccordionTrigger>
                <AccordionContent>
                  <a href="#">О нас</a>
                </AccordionContent>
                <AccordionContent>
                  <a href="#">Котакты</a>
                </AccordionContent>
                <AccordionContent>
                  <a href="#">ЧЗВ</a>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Категории</AccordionTrigger>
                <AccordionContent>
                  <a href="#">Костюмы</a>
                </AccordionContent>
                <AccordionContent>
                  <a href="#">Пиджаки</a>
                </AccordionContent>
                <AccordionContent>
                  <a href="#">Рубашки</a>
                </AccordionContent>
                <AccordionContent>
                  <a href="#">Галстуки</a>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div>
          <h2 className=" text-center text-[16px] font-semibold">
            Еще больше в наших соц сетях
          </h2>
        </div>
        <div className=" flex items-center justify-center gap-5 mt-5">
          <Image
            src="/images/telegram.png"
            alt="telegram"
            width={34}
            height={34}
          />
          <Image
            src="/images/youtube.png"
            alt="youtube"
            width={34}
            height={34}
          />
          <Image src="/images/vk.png" alt="vk" width={34} height={34} />
          <button className=" bg-[#2C3453] px-6 py-2 text-white text-[14px]">
            Запретграм*
          </button>
        </div>
        <div className=" flex gap-5">
          <Image src="/images/paypal.png" alt="paypal" width={53} height={33} />
          <Image
            src="/images/discover.png"
            alt="discover"
            width={53}
            height={33}
          />
          <Image
            src="/images/payment3.png"
            alt="payment4"
            width={53}
            height={33}
          />
          <Image src="/images/amex.png" alt="amex" width={53} height={33} />
        </div>
        <div className=" flex flex-col gap-2">
          <a href="#">© Design by ITMAG</a>
          <a href="#">Политика конфиденциальности</a>

          <a href="#">Условия требования</a>
        </div>
      </section>
    </footer>
  );
}
