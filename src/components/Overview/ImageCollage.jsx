import React from "react";
import Image from "next/image";
import pool from "../../../public/assets/pool.avif";
import bar from "../../../public/assets/bar.avif";
import hall from "../../../public/assets/hall.webp";
import bed from "../../../public/assets/2bed.avif";
import open from "../../../public/assets/open.png";

const ImageCollage = () => {
  return (
    <div className="container mx-auto">
      <div className="w-full flex flex-col md:flex-row gap-0.5">
        {/* Large image on the left */}
        <div className="md:w-1/2 w-full">
          <Image
            src={pool}
            alt="Large Resort View"
            className="w-full h-full md:h-80 object-cover"
          />
        </div>

        <div className="hidden sm:grid sm:w-1/2 w-full grid-cols-2 gap-0.5">
  <div className="h-40 md:h-40">
    <Image
      src={bar}
      alt="Room View"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="h-40 md:h-40">
    <Image
      src={bed}
      alt="Bar View"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="h-40 md:h-40">
    <Image
      src={hall}
      alt="Lobby View"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="h-40 md:h-40">
    <Image
      src={open}
      alt="Wine Rack View"
      className="w-full h-full object-cover"
    />
  </div>
</div>

      </div>
    </div>
  );
};

export default ImageCollage;
