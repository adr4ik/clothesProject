"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import BlogPage from "@/app/(site)/blogPage/page";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function HeaderMenu() {
  return (
    <NavigationMenu className=" max-[870px]:hidden">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Категории</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className=" flex max-w-[900px] px-4 py-4 gap-7">
              <div className=" flex flex-col">
                <Image
                  src="/images/menuImage1.png"
                  alt="menuimage"
                  width={240}
                  height={120}
                  className=" max-w-60"
                />

                <ul>
                  <Link href="/products">
                    <ListItem title="Костюмы"></ListItem>
                  </Link>
                  <ListItem
                    href="/docs/installation"
                    title="Деловые"
                  ></ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Торжественные"
                  ></ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Повседневные"
                  ></ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Просмотреть все"
                  ></ListItem>
                </ul>
              </div>
              <div className=" flex flex-col ">
                <Image
                  src="/images/menuImage2.png"
                  alt="menuimage"
                  width={240}
                  height={120}
                  className=" max-w-60"
                />

                <ul>
                  <ListItem href="/products" title="Новинки"></ListItem>
                  <ListItem
                    href="/docs/installation"
                    title="Бестселлеры"
                  ></ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Скидки"
                  ></ListItem>
                </ul>
              </div>
              <div className=" flex">
                <Image
                  src="/images/Layer4pic3.png"
                  alt="Layer4pic3"
                  width={300}
                  height={400}
                  className=" max-w-[300px] max-h-[400px] relative"
                />
                <h1 className=" absolute top-[45%] pl-24 text-3xl text-white font-bold">
                  СТИЛЬ
                </h1>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Покупателям</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className=" flex flex-col ">
              <ListItem href="/products" title="Оплата и доставка"></ListItem>
              <ListItem
                href="/docs/installation"
                title="Система лояльности"
              ></ListItem>
              <ListItem href="/answers" title="Частые вопросы"></ListItem>
              <ListItem
                href="/docs/primitives/typography"
                title="Подарочные карты"
              ></ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Бренд</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className=" flex flex-col">
              <ListItem href="/aboutUs" title="О нас"></ListItem>
              <ListItem href="/docs/installation" title="Контакты"></ListItem>
              <ListItem
                href="/docs/primitives/typography"
                title="Блог"
              ></ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/blogPage">Блог</Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
