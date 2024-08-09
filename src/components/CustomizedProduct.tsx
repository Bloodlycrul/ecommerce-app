"use client";
import React, { useEffect, useState } from "react";
import { products } from "@wix/stores";

const CustomizedProduct = ({
  itemChoice,
  productOptions,
}: {
  itemChoice: products.Variant[] | undefined;
  productOptions: products.ProductOption[];
}) => {
  const [selectedOption, setSelectedOption] = useState<{
    [key: string]: string;
  }>({});

  return (
    <div className="flex flex-col gap-4">
      {productOptions &&
        productOptions.map((option) => {
          return (
            <>
              <h4 className="font-medium" key={option.name}>
                <br />
                Chosse {option.name}
              </h4>
              <ul className="flex items-center gap-3">
                {option.choices?.map((value) => {
                  return (
                    <div
                      className="ring-1 selectli ring-cartRed text-cartRed rounded-md py-1 px-4 text-sm cursor-pointer hover:bg-cartRed hover:text-white"
                      key={value.value}
                    >
                      {value.description}
                    </div>
                  );
                })}
              </ul>
            </>
          );
        })}
    </div>
  );
};

export default CustomizedProduct;

/* 

<ul className="flex items-center gap-3">
                <li className="w-8 h-8 rounded-full cursor-pointer ring-1 ring-gray-300 relative bg-red-500">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full ring-2 ring-blue-400"></div>
                </li>
                <li className="w-8 h-8 rounded-full cursor-pointer ring-1 ring-gray-300 relative bg-pink-500"></li>
                <li className="w-8 h-8 rounded-full  ring-1 ring-gray-300 relative bg-green-500 cursor-not-allowed">
                  <div className="absolute rotate-45 bg-cartRed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-2px rounded-full ring-2 ring-red-400"></div>
                </li>
              </ul>

 {/* <h4 className="font-medium">Choose a Size</h4>
      <ul className="flex items-center gap-3">
        {productOptions &&
          productOptions.map((item: any) => {
            return (
              <li
                onClick={checkClick}
                data-id={item.choices.value}
                key={item.choices.value}
                className={`${
                  currentSelectValue === item.choices.value
                    ? "ring-1 selectli ring-cartRed text-white bg-cartRed rounded-md py-1 px-4 text-sm cursor-pointer"
                    : "ring-1 selectli ring-cartRed text-cartRed rounded-md py-1 px-4 text-sm cursor-pointer hover:bg-cartRed hover:text-white"
                }`}
              >
                {item.choices.value}
              </li>
            );
          })}
      </ul> */
