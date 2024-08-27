"use client";

import React, { useState } from "react";
import { Cart, CartProduct, IProduct } from "./interfaces";
import { BASE_URL } from "./constants";

const INIT_STATE = {
  cart: {
    products: [],
    totalPrice: 0,
  },
  count: 0,
};

export default function useCart() {
  const [cart, setCart] = useState<Cart>(INIT_STATE.cart);
  const [count, setCount] = useState<number>(INIT_STATE.count);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
    getCart();
  }

  function checkProductInCart(product: IProduct): boolean {
    let cart: Cart = JSON.parse(localStorage.getItem("cart") as string);
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }

    let isProductInCart = cart.products.some(
      (item) => item.product.id === product.id
    );
    return isProductInCart;
  }

  function getCart(): void {
    let cart: Cart = JSON.parse(localStorage.getItem("cart") as string);
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    cart.totalPrice = cart.products.reduce(
      (sum, item) => sum + item.subPrice,
      0
    );
    localStorage.setItem("cart", JSON.stringify(cart));
    setCart(cart);

    setCount(cart.products.length);
  }

  function changeCartProductCount(count: number, id: string): void {
    if (count <= 0) {
      count = 1;
    }
    let cart: Cart = JSON.parse(localStorage.getItem("cart") as string);
    cart.products = cart.products.map((item) => {
      if (item.product.id === id) {
        item.count = count;
        item.subPrice = item.product.price * count;
      }
      return item;
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  }

  function deleteCartProduct(id: string): void {
    let cart: Cart = JSON.parse(localStorage.getItem("cart") as string);
    cart.products = cart.products.filter((item) => item.product.id !== id);

    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  }

  async function editProduct(
    productId: string,
    updatedProductData: Partial<IProduct>
  ): Promise<void> {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${BASE_URL}/products/${productId}`, {
        method: "PUT", // or PATCH, depending on your API design
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProductData),
      });

      if (!response.ok) {
        throw new Error("Failed to edit product");
      }

      // Optionally: refresh the product list, show a success message, etc.
    } catch (err) {
      setError((err as Error).message || "An unknown error occurred");
    } finally {
      setLoading(false);
    }
  }

  return {
    addProductToCart,
    checkProductInCart,
    getCart,
    deleteCartProduct,
    changeCartProductCount,
    editProduct,
    loading,
    error,
    cart,
    count,
  };
}
