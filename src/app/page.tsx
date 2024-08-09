import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import { Suspense } from "react";

const HomePage = async () => {
  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 2xl:px-64">
        <h1 className="text-2xl">Featured Product</h1>
        <Suspense fallback={"Loading"}>
          <ProductList
            categoryId={"d3263a00-91f1-8525-5287-8d79aa938ea1"}
            limit={4}
          />
        </Suspense>
      </div>
      <div className="mt-24 ">
        <h1 className="text-2xl mb-14 px-4 md:px-8 lg:px-16 2xl:px-64">
          Categories
        </h1>
        <Suspense fallback={"Loading"}>
          <CategoryList />
        </Suspense>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 2xl:px-64">
        <h1 className="text-2xl">New Product</h1>
        <Suspense fallback={"Loading"}>
          <ProductList
            categoryId={"69e1af37-5ae3-c020-cfc1-1d47b76ff628"}
            limit={4}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default HomePage;
