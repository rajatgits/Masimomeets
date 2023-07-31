import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-12 md:h-24 p-3 lg:px-20 xl:px-40 text-red-500 flex items-center justify-between">
      <Link href="/" className="hidden w-1/2 md:block font-bold text-xl">
        Masimomeets
      </Link>
      <p className="w-full md:w-1/2 text-center md:text-right">
        Copyright © 2023, All rights reserverd.
      </p>
    </div>
  );
};

export default Footer;
