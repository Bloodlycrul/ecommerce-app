import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import React, { Suspense } from "react";

const ListPage = async ({ searchParams }: { searchParams: any }) => {
  console.log(searchParams.cat);
  const slug = searchParams.cat;

  const wixClient = await wixClientServer();
  console.log(wixClient);

  const getCategoryCollectionId =
    await wixClient.collections.getCollectionBySlug(slug);

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* CAMPAIGN */}
      <div className="hidden bg-pink-50 px-4 sm:flex justify-between h-64">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-grey-700">
            Grab up to 50% off on <br /> Selected Products
          </h1>
          <button className="bg-cartRed rounded-3xl text-white w-max py-3 px-5 text-sm">
            Buy Now
          </button>
        </div>
        <div className="relative w-1/3">
          <Image src={"/woman.png"} alt="" fill className="object-contain" />
        </div>
      </div>
      <Filter />
      {/* Product List */}
      <h1 className="text-2xl font-semibold mt-6">Select For You!</h1>
      <Suspense fallback={"Loading"}>
        <ProductList
          categoryId={
            getCategoryCollectionId.collection?._id ||
            "00000000-000000-000000-000000000001"
          }
        />
      </Suspense>
    </div>
  );
};

export default ListPage;
