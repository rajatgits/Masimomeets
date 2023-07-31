import { featuredProducts } from "@/data";
import Image from "next/image";
import React from "react";

const FeaturedItems = () => {
  return (
    <div className="w-screen overflow-x-scroll text-red-500">
      {/* Wrapper */}
      <div className="w-max flex ">
        {/* Single Items */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen h-[60vh] flex flex-col items-center justify-around p-5 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
          >
            {/* Image Container */}
            {item.img && (
              <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
                <Image src={item.img} alt="" fill className="object-contain" />
              </div>
            )}
            {/* Text Container */}
            <div className="flex-1 flex flex-col justify-center items-center text-center gap-5">
              <h1 className="text-xl font-bold uppercase">{item.title}</h1>
              <p className="p-5 2xl:p-10">{item.desc}</p>
              <span className="text-xl font-bold">${item.price}</span>
              <button className="bg-red-500 text-white p-2 rounded-md">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedItems;
