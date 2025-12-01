"use client";
import {
  addToCartSupa,
  clearCartSupa,
  getCartSupa,
  removeFromCartSupa,
  updateCartSupa,
} from "@/app/actions/cartAction";
import React, { createContext, useState, useContext, useEffect } from "react";

interface CartContextType {
  cart: { [key: string]: CartData } | null;
  quantity: number;
  price: number;
  initCart: () => void;
  addToCart: ({ products, quantity }: CartData) => void;
  clearCart: () => void;
  removeFromCart: (productId: number) => void;
  isLoading: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState<{ [key: string]: CartData }>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("cartData");
      return saved ? JSON.parse(saved) : {};
    }
    return {};
  });

  const [quantity, setQuantity] = useState<number>(0);
  useEffect(() => {
    const count = Object.values(cart).reduce(
      (total, item) => total + item.quantity,
      0
    );
    setQuantity(count);
  }, [cart]);

  const [price, setPrice] = useState<number>(0);

  useEffect(() => {
    const total = Object.values(cart).reduce(
      (total, item) => total + item.quantity * item.products.price_after,
      0
    );
    setPrice(total);
  }, [cart]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cartData", JSON.stringify(cart));
    }
    setIsLoading(false);
  }, [cart]);

  const initCart = async () => {
    try {
      const subaCart = (await getCartSupa()) || [];
      const data: { [key: string]: CartData } = {};
      for (let index = 0; index < subaCart.length; index++) {
        data[subaCart[index].products.id] = subaCart[index];
      }
      setCart(data);
    } catch (error) {
      console.error("Error initializing cart:", error);
    }
    
  };

  const addToCart = async ({ products, quantity = 1 }: CartData) => {
    const updatedCart = { ...cart };
    let newQuantity = quantity;

    if (updatedCart[products.id]) {
      newQuantity = updatedCart[products.id].quantity + quantity;
      updatedCart[products.id] = {
        ...updatedCart[products.id],
        quantity: newQuantity,
      };
      setCart(updatedCart);
      await updateCartSupa(products.id, newQuantity);
    } else {
      updatedCart[products.id] = { products, quantity };
      setCart(updatedCart);
      await addToCartSupa(products.id, quantity);
    }
  };

  const removeFromCart = async (productId: number) => {
    const updatedCart = { ...cart };
    delete updatedCart[productId];
    setCart(updatedCart);

    await removeFromCartSupa(productId);
  };

  const clearCart = async () => {
    setCart({});
    await clearCartSupa();
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        quantity,
        price,
        initCart,
        addToCart,
        isLoading,
        clearCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
