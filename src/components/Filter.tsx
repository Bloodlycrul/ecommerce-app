import React from "react";

const Filter = () => {
  return (
    <div className="mt-12 flex justify-between">
      <div className="flex flex-wrap gap-6">
        {/* Type Selector */}
        <select
          name="type"
          className="outline-none py-2 px-4 rounded-2xl text-xs font-medium bg-mytype"
          id=""
        >
          <option>Type</option>
          <option value="digital">Digital</option>
          <option value="physical">Physical</option>
        </select>
        {/* Min Value Selector */}
        <input
          type="text"
          name="min"
          placeholder="min price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />
        {/* Max value Selector */}
        <input
          type="text"
          name="max"
          placeholder="max price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />
        {/* Size Selector */}
        <select
          name="size"
          className="outline-none py-2 px-4 rounded-2xl text-xs font-medium bg-mytype"
          id=""
        >
          <option>Size</option>
          <option value="digital">Small</option>
          <option value="physical">Medium</option>
          <option value="physical">Large</option>
          <option value="physical">Extra Large</option>
        </select>
        {/* Color Selector */}
        <select
          name="color"
          className="outline-none py-2 px-4 rounded-2xl text-xs font-medium bg-mytype"
          id=""
        >
          <option>Color</option>
          <option value="digital">Small</option>
          <option value="physical">Medium</option>
          <option value="physical">Large</option>
          <option value="physical">Extra Large</option>
        </select>
        {/* Category Selector */}
        <select
          name="category"
          className="outline-none py-2 px-4 rounded-2xl text-xs font-medium bg-mytype"
          id=""
        >
          <option>Category</option>
          <option value="digital">Small</option>
          <option value="physical">Medium</option>
          <option value="physical">Large</option>
          <option value="physical">Extra Large</option>
        </select>
        {/* All Filter Selector */}
        <select
          name="all filter"
          className="outline-none py-2 px-4 rounded-2xl text-xs font-medium bg-mytype"
          id=""
        >
          <option>All Filter</option>
          <option value="digital">Small</option>
          <option value="physical">Medium</option>
          <option value="physical">Large</option>
          <option value="physical">Extra Large</option>
        </select>
      </div>
      <div className="">
        {/* Sort by Selector */}
        <select
          name="sort by"
          className="outline-none py-2 px-4 rounded-2xl text-xs font-medium ring-1 ring-gray-400"
          id=""
        >
          <option>Sort By</option>
          <option value="digital">Price (Low to High)</option>
          <option value="physical">Price (High to Low)</option>
          <option value="physical">Newest</option>
          <option value="physical">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
