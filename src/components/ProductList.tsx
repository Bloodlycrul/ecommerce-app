import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Product_Per_Page = 20;
const ProductList = async ({
  categoryId,
  limit,
  searchParams,
}: {
  categoryId: string;
  limit?: number;
  searchParams?: any;
}) => {
  const wixClient = await wixClientServer();
  const Collection = await wixClient.products
    .queryProducts()
    .eq("collectionIds", categoryId)
    .limit(limit || Product_Per_Page)
    .find();

  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {/* Item 1 */}
      {Collection.items.map((item: products.Product) => {
        return (
          <Link
            key={item._id}
            className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
            href={"/" + item.slug}
          >
            <div className="relative w-full h-80">
              <Image
                src={item.media?.mainMedia?.image?.url || "/product.png"}
                alt=""
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
              />
              <Image
                // @ts-ignore
                src={item.media?.items[1]?.image?.url || "/product.png"}
                alt=""
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md "
              />
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">{item.name}</span>
              <span className="font-semibold">
                {"₹" + item.priceData?.price}
              </span>
            </div>
            <div
              className="text-sm text-gray-500"
              dangerouslySetInnerHTML={{
                __html:
                  item.description?.length! > 154
                    ? item.description?.substring(0, 154) + "..."
                    : item.description || "",
              }}
            ></div>
            <button className="rounded-2xl ring-1 w-max ring-cartRed text-cartRed py-2 px-4 text-xs hover:bg-cartRed hover:text-white">
              Add to Cart{" "}
            </button>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductList;
