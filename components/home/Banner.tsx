// components/Banner.js
import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const Banner = () => {
  return (
    <div className="px-7 mt-5">
      <div className="relative overflow-hidden rounded-xl">
        <div
          className="relative py-16 md:py-20 flex items-center bg-center bg-cover bg-[#062c31] justify-center"
          style={{
            backgroundImage:
              "url('/assets/images/all-img/backgroundequipe.png')",
          }}
        >
          <div className="relative text-center">
            <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white flex items-center justify-center gap-2 mb-4">
              <div className="text-white">
                <Image
                  src={"/assets/images/all-img/fcosa.png"}
                  alt="Fond FC OSA"
                  objectFit="cover"
                  className=" h-15 w-40"
                  width={413}
                  height={100}
                />
              </div>
            </h1>
            <p className="mt-4 text-yellow-400 font-extrabold text-2xl sm:text-3xl lg:text-6xl tracking-wider">
              TOUJOURS EN AVANT !
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href="#"
                className="bg-yellow-400 text-black font-bold py-2 px-5 rounded-full shadow-lg hover:bg-yellow-500 transition-colors duration-300 flex items-center space-x-2 text-sm"
              >
                <span>Je découvre le club</span>
                <ChevronRight />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full flex justify-center">
          <div className="bg-[#5D0B9E] h-1 w-20"></div>
          <div className="bg-yellow-400 h-1 w-20"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
