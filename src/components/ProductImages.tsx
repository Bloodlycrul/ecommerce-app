"use client";
import Image from "next/image";
import React, { useState } from "react";

const ProductImages = ({ items }: { items: any }) => {
  const [current, setCurrent] = useState(0);
  return (
    <div>
      <div className="h-[500px] relative">
        <Image
          src={items[current].image.url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex gap-5">
        {items.map(
          (
            item: {
              image: { url: string };
              thumbnail: { url: string };
              _id: string;
            },
            index: number
          ) => {
            return (
              <div key={item._id} className="w-1/4 h-32 relative gap-4 mt-8">
                <Image
                  src={item.thumbnail.url}
                  alt={""}
                  fill
                  sizes="30vw"
                  className="object-cover rounded-md transition-all ease-in-out duration-1000 cursor-pointer"
                  onClick={() => {
                    setCurrent(index);
                  }}
                />
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default ProductImages;
