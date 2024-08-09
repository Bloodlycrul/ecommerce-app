"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <Image
        onClick={() => {
          setOpen((prevState) => !prevState);
        }}
        className="cursor-pointer"
        src="/menu.png"
        alt=""
        width={28}
        height={28}
      />
      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full flex flex-col items-center justify-center h-[calc(100vh-20px)] gap-8 text-xl z-100">
          <Link href={"/"}>Homepage</Link>
          <Link href={"/"}>Shop</Link>
          <Link href={"/"}>Deals</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Contact</Link>
          <Link href={"/"}>Logout</Link>
          <Link href={"/"}>Cart (1)</Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
