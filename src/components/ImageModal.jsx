import React from "react";
import Image from "next/image";

const ImageModal = ({ isModalOpen, modalImage, closeModal }) => {
  if (!isModalOpen) return null;

  return (
    <div
      className="fixed inset-0 backdrop-opacity-50 bg-gray-300 bg-opacity-75 flex items-center justify-center z-50"
      onClick={closeModal}
    >
      <div
        className="relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
      >
      <div className="flex space-x-3">
        <Image
          src={modalImage}
          alt="Modal Image"
          className="w-80 h-80 object-cover"
        />
        <Image
          src={modalImage}
          alt="Modal Image"
          className="w-80 h-80 object-cover"
        />
        </div>
        <button
          className="absolute top-2 right-2 text-white text-xl"
          onClick={closeModal}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
