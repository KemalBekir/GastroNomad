"use client";
import React, { useState } from "react";

interface ImageGalleryProps {
  images: { _id: string; url: string; altText: string }[];
}

const PostImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === images.length - 1 ? 0 : prevImage + 1
    );
  };

  return (
    <>
      <h2 className="text-center my-5 text-2xl">More Images:</h2>
      <div className="flex items-center justify-center h-full w-[90%] m-auto border-b-2 border-black pb-12 mb-3 drop-shadow-lg">
        <button
          className="bg-black text-white p-2 rounded-full mr-2"
          onClick={handlePrevImage}
        >
          &lt;
        </button>
        <img
          className="max-w-full max-h-80vh object-contain h-[700px] w-[700px] "
          src={images[currentImage].url}
          alt={images[currentImage].altText}
        />
        <button
          className="bg-black text-white p-2 rounded-full ml-2"
          onClick={handleNextImage}
        >
          &gt;
        </button>
      </div>
    </>
  );
};

export default PostImageGallery;
