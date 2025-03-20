import React from "react";
import spa from "../../public/assets/spa.avif";
import { FaRegCommentAlt } from "react-icons/fa"; // Import the regular comment icon
import Image from "next/image";


const About = () => {
  return (
    <div id="about" className="flex flex-wrap">
      <Image
        src={spa}
        alt="Large Resort View"
        className="w-full h-80 object-cover rounded-md md:w-1/3 md:h-[400px]" // Adjusted height
      />
      <div className="md:w-2/3 p-4">
        <div className="mb-4">
          <p className="text-lg font-semibold">Spa</p>
          <p className="text-gray-700">
            The on-site spa has 6 treatment rooms including couples treatment
            rooms. The hotel's spa offers deep-tissue massages and hot stone
            massages. Types of treatments available include body scrubs, body
            wraps, facials, and manicures/pedicures. Other on-site facilities
            include a steam room, a sauna, and a hot tub.
          </p>
        </div>

        <div className="h-40 sm:h-auto flex items-center rounded-2xl mb-4 bg-gray-100 p-5 py-16 space-x-6">
  <div className="flex items-center justify-center rounded-full bg-blue-300 w-10 h-10 px-3">
    <FaRegCommentAlt  />
  </div>

  <div>
    <p className="text-lg font-semibold">
      What guests liked about the spa
    </p>
    <p className="text-gray-700">
      The spa was a highlight with great services, including sports
      massage and cabanas.
    </p>
  </div>
</div>


        <a href="#" className="text-blue-600 hover:underline">
          See all spa amenities
        </a>
      </div>
    </div>
  );
};

export default About;
