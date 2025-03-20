import React from "react";
import ImageCollage from "./Overview/ImageCollage";
import StickyNavbar from "./StickyNavbar";
import {
  FaRegHeart,
  FaMapMarkerAlt,
  FaPlane,
  FaDumbbell,
  FaBed,
} from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";

const features = [
  { icon: <FaDumbbell />, text: "Fitness Center" },
  { icon: <FaMapMarkerAlt />, text: "Great Location" },
  { icon: <FaPlane />, text: "Airport Shuttle" },
  { icon: <FiShare2 />, text: "Free Wi-Fi" },
  { icon: <FaRegHeart />, text: "Pet Friendly" },
  { icon: <FaBed />, text: "Luxury Rooms" },
];

const PropertyDetails = () => {
  return (
    <div className="w-full lg:w-2/3 px-2 md:px-4 mt-5">
      <p className="text-2xl sm:text-3xl md:text-4xl font-medium">
        Westgate Las Vegas Resort & Casino
      </p>
      <p className="text-lg font-medium">★★★★★</p>
      <div className="flex space-x-3">
        <p className="text-white bg-green-700 rounded-lg px-1 text-sm pt-0.5">
          8.0
        </p>
        <p className="text-md font-medium">Very good</p>
      </div>
      <p className="text-blue-600 py-2">See all 4,269 reviews </p>
      <p className="font-medium text-xl">About this property</p>
      <p>
        Pet-friendly Las Vegas hotel connected to the convention center, a quick
        walk to Las Vegas Convention Center
      </p>

      <div className="grid grid-cols-2 gap-2 mt-4 ">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-2">
            {feature.icon && <span>{feature.icon}</span>}
            <span>{feature.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const MapSection = () => {
  return (
    <div className="w-full lg:w-1/3 py-4 md:py-8 px-2 md:px-4 mt-4 lg:mt-0">
      <p className="font-medium text-lg">Explore the area</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d113040.48431803317!2d85.320398!3d27.701377!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a9122e5dc3%3A0x3eb124f4579db875!2sKathmandu%20Fun%20Park!5e0!3m2!1sen!2snp!4v1742363973994!5m2!1sen!2snp"
        width="100%"
        height="200"
        className="rounded-2xl mt-2"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="p-1 space-y-2 mt-2 text-sm font-medium text-gray-600">
        <div className="flex space-x-4">
          <p className="flex items-center ">
            <FaMapMarkerAlt className="mr-2" size={16} />
            Las Vegas Convention Center
          </p>
          <p className="flex items-center ">8 mins walk</p>
        </div>
        <div className="flex space-x-4">
          <p className="flex items-center ">
            <FaMapMarkerAlt className="mr-2" size={16} />
            Las Vegas Convention Center
          </p>
          <p className="flex items-center ">15 mins walk</p>
        </div>
        <div className="flex space-x-4">
          <p className="flex items-center">
            <FaMapMarkerAlt className="mr-2" size={16} />
            Las Vegas Convention Center
          </p>
          <p className="flex items-center ">8 mins walk</p>
        </div>
        <div className="flex space-x-4">
          <p className="flex items-center">
            <FaPlane className="mr-2" size={16} />
            Las Vegas, NV (LAS-Harry Reid Intl)
          </p>

          <p className="flex items-center ">10 mins walk</p>
        </div>
      </div>

      <p className="text-blue-600 hover:text-blue-800 my-2 cursor-pointer">
        See all about this area
      </p>
    </div>
  );
};

const Overview = () => {
  return (
    <>
      <div id="overview" className="hidden sm:flex flex-col sm:flex-row justify-between items-center py-4 px-2 sm:px-4">
        <div className="mb-4 sm:mb-0">
          <a href="#" className="hover:underline text-blue-600">
            See all properties
          </a>
        </div>

        <div className="flex space-x-3">
          <button className="flex p-1 border rounded-3xl px-2 hover:bg-gray-200">
            <FiShare2 className="text-blue-600 mr-1 mt-0.5" size={20} />
            Share
          </button>

          <button className="flex p-1 border rounded-3xl px-2 hover:bg-gray-200">
            <FaRegHeart className="text-red-600 rounded-full p-1" size={25} />
            Save
          </button>
        </div>
      </div>

      <ImageCollage />
      <StickyNavbar />

      <div className="flex flex-col lg:flex-row">
        <PropertyDetails />
        <MapSection />
      </div>
    </>
  );
};

export default Overview;
