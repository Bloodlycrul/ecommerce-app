"use client";
import Image from "next/image";
import React from "react";

type Props = {};

const CartModel = () => {
  const cartItem = true;

  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-100 ">
      {!cartItem ? (
        <div>
          <h1>Your Cart is Empty</h1>
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-8">
            <h3 className="text-xl font-normal">Shopping Cart</h3>
            {/* Item 1 */}
            <div className="flex gap-4">
              <Image
                src={
                  "https://images.pexels.com/photos/18546476/pexels-photo-18546476/free-photo-of-smiling-young-woman-putting-on-a-helmet.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                }
                alt="happy girl"
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* Top Section */}
                <div className=""></div>
                {/* Title */}
                <div className="flex items-center justify-between gap-8">
                  <h3 className="font-semibold ">Product Name</h3>
                  <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                </div>
                {/* Desc */}
                <div className="text-sm text-gray-500">available</div>
                {/* Bottom Section */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty . 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
            {/* Item 2 */}
            <div className="flex gap-4">
              <Image
                src={
                  "https://images.pexels.com/photos/18546476/pexels-photo-18546476/free-photo-of-smiling-young-woman-putting-on-a-helmet.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                }
                alt="happy girl"
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* Top Section */}
                <div className=""></div>
                {/* Title */}
                <div className="flex items-center justify-between gap-8">
                  <h3 className="font-semibold ">Product Name</h3>
                  <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                </div>
                {/* Desc */}
                <div className="text-sm text-gray-500">available</div>
                {/* Bottom Section */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty . 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
          </div>
          {/* Car Bottom  */}
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span className="">SubTotal</span>
              <span className="">$49</span>
            </div>
            <p className="text-gray-500 mt-3">
              Shipping and taxes calculated at Checkout
            </p>
            <div className="flex justify-between text-sm mt-3">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                View Cart
              </button>
              <button className="rounded-md py-3 px-4 bg-black text-white">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModel;
