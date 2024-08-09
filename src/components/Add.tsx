"use client";
import React from "react";

const Add = () => {
  const [quantity, setQuantity] = React.useState(1);
  const TemporaryQuantity = 4;

  const handleQuantity = (type: "i" | "d") => {
    if (type === "d" && quantity > 1) {
      setQuantity((quantity) => quantity - 1);
    }
    if (type === "i" && quantity < TemporaryQuantity) {
      setQuantity((quantity) => quantity + 1);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose a Quantity</h4>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-8">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button onClick={() => handleQuantity("d")}>-</button>
            {quantity}
            <button onClick={() => handleQuantity("i")}>+</button>
          </div>
          <div className="text-sm">
            Only <span className="text-orange-400"> 4 items</span> left!
            <br />
            Don`&lsquo;`t miss it
          </div>
        </div>

        <button className="w-36 text-sm rounded-3xl ring-1 ring-cartRed py-2 px-2 hover:bg-cartRed hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200  ">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Add;
