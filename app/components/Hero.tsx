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
      <div className="absolute video-content space-y-2">
        <h1 className="font-light text-6xl z-10">Welcome</h1>
        <h3 className="font-light text-3xl z-10">Gastro Nomad</h3>
      </div>
    </section>
  );
};

export default Hero;
