import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import Image from "next/image";
import CartIcon from "./CartIcon";

const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 md:h-24 lg:px-20 xl:px-40">
      {/* Left Links */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
      </div>
      {/* Logo */}
      <div className="text-xl md:text-3xl md:font-bold md:text-center flex-1">
        <Link href="/">Masimomeets</Link>
      </div>
      {/* Mobile Menu */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* Right Links */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="md:absolute top-3 right-2 flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span>+91 9842974248</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/order">Orders</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
