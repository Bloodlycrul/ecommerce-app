"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const SearchBar = () => {
  const router = useRouter();
  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("search") as string;
    if (name) {
      router.push(`/list?name=${name}`);
    }
  };
  return (
    <form
      className="flex items-center justify-center gap-4 bg-gray-100 p-2 rounded-md flex-1"
      onSubmit={handleSearch}
    >
      <input
        className="focus:outline-none flex-1  bg-transparent"
        type="text"
        name="search"
        placeholder="search"
      />
      <button>
        <Image src={"/search.png"} alt="search-icon" width={16} height={16} />
      </button>
    </form>
  );
};

export default SearchBar;
