import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ProductsSelect() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={"Сортировать"} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="apple">По умолчанию</SelectItem>
          <SelectItem value="banana">Цена по возрастанию</SelectItem>
          <SelectItem value="blueberry">Цена по убыванию</SelectItem>
          <SelectItem value="grapes">Цена по убыванию</SelectItem>
          <SelectItem value="pineapple">По новизне</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
