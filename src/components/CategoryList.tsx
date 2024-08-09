import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryList = async () => {
  const cat = (await wixClientServer()).collections.queryCollections().find();
  return (
    <div className="px-4 overflow-x-scroll scrollbar">
      <div className="flex gap-4 md:gap-8">
        {(await cat).items.map((item) => {
          return (
            <Link
              key={item._id}
              href={"/list?cat=" + item.slug}
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 "
            >
              <div className="relative bg-slate-100 w-full h-96">
                <Image
                  src={item.media?.mainMedia?.image?.url || "/product.png"}
                  alt=""
                  fill
                  sizes="20vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-8 font-light text-lg tracking-tight">
                {item.name}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryList;
