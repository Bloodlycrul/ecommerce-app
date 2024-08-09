import Add from "@/components/Add";
import CustomizedProduct from "@/components/CustomizedProduct";
import ProductImages from "@/components/ProductImages";
import { wixClientServer } from "@/lib/wixClientServer";
import { info } from "console";
import { notFound } from "next/navigation";
import React from "react";

const SinglePage = async ({ params }: { params: { slug: string } }) => {
  const wixClient = await wixClientServer();
  const products = await wixClient.products
    .queryProducts()
    .eq("slug", params.slug)
    .find();

  if (!products.items[0]) {
    return notFound();
  }

  const product = products.items[0];
  console.log(product);

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* Image */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages items={product.media?.items} />
      </div>
      {/* Text Container */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{product.name}</h1>
        <p
          className="text-gray-500"
          dangerouslySetInnerHTML={{
            __html: product.description || "",
          }}
        ></p>
        <div className="h-[2px] bg-gray-100" />
        {product.price?.price === product.price?.discountedPrice ? (
          <p className="font-semibold text-2xl">${product.price?.price}</p>
        ) : (
          <div className="flex gap-8 items-center ">
            <p className="text-gray-500 text-xl line-through">
              ${product.price?.price}
            </p>
            <p className="font-semibold text-2xl">
              ${product.price?.discountedPrice}
            </p>
          </div>
        )}

        <div className="h-[2px] bg-gray-100" />
        {product.variants && product.variants?.length > 1 && (
          // @ts-ignore
          <CustomizedProduct
            itemChoice={product.variants || []}
            productOptions={product?.productOptions || []}
          />
        )}
        <Add />
        <div className="h-[2px] bg-gray-100" />
        {product.additionalInfoSections?.map((info, index) => {
          return (
            <div key={index} className="text-sm">
              <h4 className="font-medium mb-4">{info.title}</h4>
              <p>{info.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SinglePage;
