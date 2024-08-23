"use client";

import React, { useState } from "react";
import { IProduct } from "./interfaces";

interface CartProduct {
  product: IProduct;
  count: number;
  subPrice: number;
}

interface Cart {
  products: CartProduct[];
  totalPrice: number;
}

const INIT_STATE = {
  cart: {
    products: [],
    totalPrice: 0,
  },
  count: 0,
};

export default function useCart() {
  const [cart, setCart] = useState<Cart>(INIT_STATE.cart);
  const [count, setCount] = useState<Cart>(INIT_STATE.cart);

  function addProductToCart(product: IProduct): void {
    let cart: Cart = JSON.parse(localStorage.getItem("cart") as string);
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }

    let newProduct: CartProduct = {
      product: product,
      count: 1,
      subPrice: product.price,
    };

    let isProductInCart = cart.products.some(
      (item) => item.product.id === product.id
    );
    if (isProductInCart) {
      cart.products = cart.products.filter(
        (item) => item.product.id !== product.id
      );
    } else {
      cart.products.push(newProduct);
    }

    cart.totalPrice = cart.products.reduce(
      (sum, item) => sum + item.subPrice,
      0
    );

    localStorage.setItem("cart", JSON.stringify(cart));
  }

  return { addProductToCart, cart, count };
}
