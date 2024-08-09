import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavbarIcons from "./NavbarIcons";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative z-50">
      {/* Mobile */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href={"/"}>
          <div className="tracking-wide text-2xl "> GR</div>
        </Link>
        <Menu />
      </div>
      {/* Bigger Screen */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* left */}
        <div className="w-1/3 xl:w-1/2 flex items-center justify-evenly ">
          <Link href={"/"} className="flex items-center gap-4">
            <Image src={"/logo.png"} alt="logo" width={24} height={24} />
            <div className="tracking-wide text-2xl "> GR</div>
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Shop</Link>
            <Link href={"/"}>Deals</Link>
            <Link href={"/"}>About</Link>
            <Link href={"/"}>Contact</Link>
          </div>
        </div>
        {/* right */}
        <div className="w-2/3 flex items-center justify-between gap-8 xl:w-1/2">
          <SearchBar />
          <NavbarIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
