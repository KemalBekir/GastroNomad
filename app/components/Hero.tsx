// pages/index.js

import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="h-screen w-screen">
      {/* Gradient background */}
      <div className="w-full h-full bg-gradient-to-b from-white to-gray-300 relative">
        <div className="relative w-full h-full">
          <div className="top-1 left-0 w-[150px] h-[150px] ml-3">
            <img src="logo.png" alt="" />
          </div>
          {/* Background Image */}
          <div className="absolute top-1/3 left-1/3 z-30 w-[90%] max-w-screen-lg px-4">
            <div className="w-full flex flex-row flex-nowrap items-center">
              <div className="flex flex-col w-[50%]">
                <h1 className="text-white text-6xl uppercase tracking-widest mt-8">
                  Gastro Nomad
                </h1>
                <p className="mt-10 text-3xl text-gray-400 w-3/4">
                  Culinary adventures and cultural exploration worldwide
                </p>
              </div>
              <div className="flex flex-col absolute right-2 w-[30%]">
                <Link href="/facebook" className="text-white my-[5px]">
                  <Image
                    src="/facebook.png"
                    alt="Facebook"
                    width={32}
                    height={32}
                  />
                </Link>
                <Link href="/instagram" className="text-white my-[5px]">
                  <Image
                    src="/instagram.png"
                    alt="Instagram"
                    width={32}
                    height={32}
                  />
                </Link>
                <Link href="/twitter" className="text-white my-[5px]">
                  <Image
                    src="/twitter.png"
                    alt="Twitter"
                    width={32}
                    height={32}
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className=" h-full w-full z-20 opacity-100">
            <img
              src="/plate-nobg.png"
              alt=""
              className="absolute  bottom-1/4 -left-48 drop-shadow-2xlg  z-20"
            />
          </div>
          {/* Image overlay */}
          <div className="absolute top-0 right-0 h-4/5 w-[90%] bg-[#1c3039] z-10">
            <div className="bg-[url('/wine-glass.jpg')] bg-cover bg-top bg-no-repeat w-full h-full opacity-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
