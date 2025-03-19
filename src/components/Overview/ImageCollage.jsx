import React from "react";
import image from "../../../public/assets/download.jpg";
import Image from "next/image";
const ImageCollage = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row gap-0.5">
        <div className="md:w-1/2 w-full ">
          <Image
            src={image}
            alt="Large Resort View"
            className="w-full h-auto object-cover "
          />
        </div>

        <div className="md:w-1/2 w-full grid grid-cols-2 gap-0.5">
          <div>
            <Image
              src={image}
              alt="Room View"
              className="w-full h-auto object-cover "
            />
          </div>

          <div>
            <Image
              src={image}
              alt="Bar View"
              className="w-full h-auto object-cover "
            />
          </div>

          <div>
            <Image
              src={image}
              alt="Lobby View"
              className="w-full h-auto object-cover "
            />
          </div>

          <div>
            <Image
              src={image}
              alt="Wine Rack View"  
              className="w-full h-auto object-cover "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCollage;
