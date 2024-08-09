"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import CartModel from "./CartModel";

const NavbarIcons = () => {
  const router = useRouter();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setisCartOpen] = useState(false);
  // Todo : Remove this when we have the login logic
  const isLoggedIn = true;
  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    setIsProfileOpen((prev) => !prev);
  };

  const handleCartItem = () => {
    setisCartOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image
        src={"/profile.png"}
        alt="profile-icon"
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={handleProfile}
      />

      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-10 bg-white text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <Link href={"/"}> Profile</Link>
          <div className="mt-2 cursor-pointer">LogOut</div>
        </div>
      )}

      <Image
        src={"/notification.png"}
        alt="profile-icon"
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <div className="relative cursor-pointer">
        <Image
          src={"/cart.png"}
          alt="profile-icon"
          width={22}
          height={22}
          onClick={handleCartItem}
        />
        <div className="absolute -top-3 -right-4 w-6 h-6 rounded-full bg-cartRed flex items-center justify-center text-sm text-white ">
          <p className="">1</p>
        </div>
      </div>
      {isCartOpen && (
        <div className="">
          <CartModel />
        </div>
      )}
    </div>
  );
};

export default NavbarIcons;
