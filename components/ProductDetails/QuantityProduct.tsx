"use client";

import { createClient } from "@/lib/supabase/client";
import React, { useState } from "react";

export default function QuantityProduct({
  product,
}: {
  product: ProductDetailsData;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [units, setUnits] = useState(1);

  const onSubmit = async() => {
    setIsLoading(true)
    const s = createClient()
    const l = await s.from("products").select("id")
    setIsLoading(false)
    console.log(l)
    
  };

  return (
    <>
      <div className=" mb-10">
        <p className="text-xl font-semibold">Quantity:</p>
        <div className="flex w-full justify-center mt-20 gap-5">
          <button
            className="w-13 h-13 rounded-full hover:bg-primary text-6xl flex justify-center items-center border-2 border-primary text-primary hover:text-white transition-all duration-300 cursor-pointer"
            onClick={() => units > 1 && setUnits(units - 1)}
          >
            <span className="relative -top-[2px]">-</span>
          </button>
          <div className="flex flex-col items-center justify-center relative -top-1">
            <p className="font-bold text-4xl">{units}</p>
            <p className="text-lg text-gray-700">Unit(s)</p>
          </div>
          <button
            className="w-13 h-13 rounded-full hover:bg-primary text-3xl font-semibold flex justify-center items-center border-2 border-primary text-primary hover:text-white transition-all duration-300 cursor-pointer"
            onClick={() => setUnits(units + 1)}
          >
            <span className="relative -top-[1px]">+</span>
          </button>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl  p-4 space-y-2 mb-14">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Unit Price:</span>
          <span className="font-semibold  text-gray-900">
            EGP {product.price_after}
          </span>
        </div>
        <div className="flex justify-between items-center text-lg">
          <span className="font-medium text-lg text-gray-900">Total Price:</span>
          <div className="flex flex-col">
            <span className="font-bold text-2xl text-[#1F1F6F]">
              EGP {product.price_after * units}
            </span>
            <span className="font-bold text-lg text-right text-[#1F1F6F] line-through">
              EGP {product.price_before * units}
            </span>

          </div>
        </div>
      </div>

      <button
        className={`py-5 px-3 w-full ${
          isLoading
            ? "bg-green-500 hover:bg-green-600 cursor-not-allowed"
            : "cursor-pointer bg-primary hover:bg-primary-hover"
        } rounded-xl mt-2  flex justify-center items-center transition-all duration-300 hover:scale-105`}
        onClick={() => onSubmit()}
      >
        {isLoading ? (
          <div className="h-6 w-6 border-b-2 border-current rounded-full animate-spin"></div>
        ) : (
          <p className="h-full w-full md:text-xl text-white flex justify-center items-center font-bold transition-all duration-300">
            {`Add ${units} Unit(s) to Cart - EGP ${product.price_after * units}`}
        </p>
        )}
        
      </button>
    </>
  );
}
