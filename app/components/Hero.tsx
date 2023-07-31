// pages/index.js

const Hero = () => {
  return (
    <div className="h-screen">
      {/* Gradient background */}
      <div className="w-full h-full bg-gradient-to-b from-white to-gray-300 relative">
        <div className="relative w-full h-full">
          {/* Background Image */}
          <div className=" h-full w-full z-20 opacity-100">
            <img
              src="/plate-nobg.png"
              alt=""
              className="absolute  bottom-1/4 -left-48 drop-shadow-2xlg  z-20"
            />
          </div>
          {/* Image overlay */}
          <div className="absolute top-0 right-0 h-4/5 w-[90%] bg-[#1c3039] z-10">
            <div className="bg-[url('/table.jpg')] bg-cover bg-center bg-no-repeat w-full h-full opacity-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
