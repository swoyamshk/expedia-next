import React, { useState } from 'react';
import Image from 'next/image';
import pool from "../../../public/assets/pool.avif";
import bar from "../../../public/assets/bar.avif";
import hall from "../../../public/assets/hall.webp";
import bed from "../../../public/assets/2bed.avif";
import open from "../../../public/assets/open.png";

const ImageCollage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: pool, alt: "Resort Pool" },
    { src: bar, alt: "Bar and Lounge" },
    { src: bed, alt: "Bedroom" },
    { src: hall, alt: "Hallway" },
    { src: open, alt: "Open Area" }
  ];

  const openModal = (imageSrc, index) => {
    setCurrentImage(imageSrc);
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setCurrentImage(images[newIndex].src);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setCurrentImage(images[newIndex].src);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') closeModal();
  };

  return (
    <div className="container mx-auto">
      <div className="w-full flex flex-col md:flex-row gap-0.5">
        <div className="md:w-1/2 w-full">
          <div className="relative h-80">
            <Image
              src={images[0].src}
              alt={images[0].alt}
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => openModal(images[0].src, 0)}
              layout="fill"
            />
          </div>
        </div>

        <div className="hidden sm:grid sm:w-1/2 w-full grid-cols-2 gap-0.5">
          {images.slice(1).map((image, idx) => (
            <div key={idx} className="h-40 relative">
              <Image
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => openModal(image.src, idx + 1)}
                layout="fill"
              />
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative w-full max-w-5xl p-4">
            <button 
              className="absolute top-4 right-4 text-white text-4xl z-10 hover:text-gray-300 bg-black bg-opacity-30 rounded-full w-10 h-10 flex items-center justify-center"
              onClick={closeModal}
            >
              &times;
            </button>
            
            <button 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl z-10 hover:text-gray-300 bg-black bg-opacity-30 rounded-full w-12 h-12 flex items-center justify-center"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
            >
              &#10094;
            </button>
            
            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl z-10 hover:text-gray-300 bg-black bg-opacity-30 rounded-full w-12 h-12 flex items-center justify-center"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
            >
              &#10095;
            </button>
            
            <div className="relative h-96 md:h-[70vh] w-full bg-transparent" onClick={(e) => e.stopPropagation()}>
              <Image
                src={currentImage}
                alt={`Gallery image ${currentIndex + 1}`}
                className="object-contain h-full w-full"
                layout="fill"
              />
            </div>
            
            <p className="text-white text-center mt-2 bg-black bg-opacity-30 rounded-full px-4 py-1 inline-block mx-auto">
              {currentIndex + 1} / {images.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCollage;