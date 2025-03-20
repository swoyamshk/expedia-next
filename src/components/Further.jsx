import Image from 'next/image'
import React from 'react'
import pool from "../../public/assets/pool.avif";
import qr from "../../public/assets/qr.png";

const Further = () => {
  return (
    <div className="hidden sm:flex mt-8 flex-col md:flex-row border h-auto md:h-60 text-gray-600 rounded-2xl overflow-hidden">
      <div className="w-full md:w-1/3">
        <Image
          src={pool}
          alt="Large Resort View"
          className="w-full h-60 md:h-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-center p-4 md:w-1/2 max-w-[50%]">
        <h1 className="text-lg font-bold text-gray-900 mb-2">
          Go further with the Expedia app
        </h1>
        <p className="text-sm mb-2">
          Save even more - get up to 20% on select hotels when you book on the app. 
          Our app deals help you to save on trips so you can travel more and manage it all on the go.
        </p>
        <p className="text-sm">
          Scan the QR code with your device camera and download our app.
        </p>
      </div>

      <div className="flex items-center justify-center w-full md:w-1/4 p-4">
        <Image
          src={qr}
          alt="QR Code"
          className="w-32 h-32 md:w-40 md:h-40 object-contain"
        />
      </div>
    </div>
  );
}

export default Further;
