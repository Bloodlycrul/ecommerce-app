import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* Top  */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* Left */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href={"/"}>
            <div className="text-2xl tracking-wide">GR</div>
          </Link>
          <p>32562 Winding Way, Central Plaza, Willpwbrook, CA 90210</p>
          <span className="font-semibold">hello@gr.com</span>
          <span className="font-semibold">+91 9343850485</span>
          <div className="flex gap-6">
            <Image
              src={"/facebook.png"}
              alt="facebook"
              width={16}
              height={16}
            />
            <Image
              src={"/instagram.png"}
              alt="facebook"
              width={16}
              height={16}
            />
            <Image src={"/youtube.png"} alt="facebook" width={16} height={16} />
            <Image
              src={"/pinterest.png"}
              alt="facebook"
              width={16}
              height={16}
            />
            <Image src={"/x.png"} alt="facebook" width={16} height={16} />
          </div>
        </div>
        {/* Center */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col gap-6">
            <h1 className="font-medium text-lg">Company</h1>
            <div className="flex flex-col gap-6">
              <Link href={""}>About Us</Link>
              <Link href={""}>Careers</Link>
              <Link href={""}>Affiliates</Link>
              <Link href={""}>Blogs</Link>
              <Link href={""}>Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="font-medium text-lg">SHOP</h1>
            <div className="flex flex-col gap-6">
              <Link href={""}>New Arrival</Link>
              <Link href={""}>Accessories</Link>
              <Link href={""}>Men</Link>
              <Link href={""}>Women</Link>
              <Link href={""}>All Product</Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="font-medium text-lg">HELP</h1>
            <div className="flex flex-col gap-6">
              <Link href={""}>Customer Services</Link>
              <Link href={""}>My Account</Link>
              <Link href={""}>Find a Store</Link>
              <Link href={""}>Legal & Privacy</Link>
              <Link href={""}>Gift Card</Link>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">SUBSCRIBE</h1>
          <p>
            Be the first to get the latest news about trends, promotions, and
            much more
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email Address"
              className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-cartRed antialiased text-white  ">
              JOIN
            </button>
          </div>
          <span className="font-semibold">Secure Payment</span>
          <div className="flex gap-8 w-full">
            <Image
              src={"/discover.png"}
              alt="facebook"
              width={16}
              height={16}
            />
            <Image src={"/skrill.png"} alt="facebook" width={16} height={16} />
            <Image src={"/paypal.png"} alt="facebook" width={16} height={16} />
            <Image
              src={"/mastercard.png"}
              alt="facebook"
              width={16}
              height={16}
            />
            <Image src={"/visa.png"} alt="facebook" width={16} height={16} />
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div className="flex flex-col gap-2 md:flex-row items-center justify-between lg:gap-8 mt-16">
        <div className="">2024 GR SHOP</div>
        <div className="flex gap-2 items-center md:gap-8 flex-col md:flex-row">
          <div className="">
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">India | English</span>
          </div>
          <div className="">
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">$</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
