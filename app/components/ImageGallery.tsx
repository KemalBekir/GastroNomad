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
      <div className="flex items-center justify-center h-full">
        <button
          className="bg-gray-300 text-gray-800 p-2 rounded-full mr-2"
          onClick={handlePrevImage}
        >
          &lt;
        </button>
        <img
          className="max-w-full max-h-80vh object-contain h-[700px] w-[700px]"
          src={images[currentImage].url}
          alt={images[currentImage].altText}
        />
        <button
          className="bg-gray-300 text-gray-800 p-2 rounded-full ml-2"
          onClick={handleNextImage}
        >
          &gt;
        </button>
      </div>
    </>
  );
};

export default PostImageGallery;
