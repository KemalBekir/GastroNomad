// pages/index.js
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
      <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          className="min-w-full min-h-full absolute object-cover"
          src="/pexelVideo.mp4"
          typeof="video/mp4"
          autoPlay
          muted
          loop
        ></video>
      </div>
      <div className="absolute video-content space-y-2 z-10">
        <h1 className="font-bold text-7xl">Gastro Nomad</h1>
        <h3 className="font-light text-2xl mt-3">
          Culinary adventures and cultural exploration
        </h3>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[24] bg-gradient-to-t from-white"></div>
    </section>
  );
};

export default Hero;
