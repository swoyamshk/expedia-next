import Image from "next/image";
import React from "react";
import { FaWifi, FaBed, FaShower, FaSwimmingPool, FaSpa } from "react-icons/fa"; // Import necessary icons

const SimilarCard = ({ property }) => {
  const renderAmenityIcon = (amenity) => {
    switch (amenity) {
      case "Wi-Fi":
        return <FaWifi size={16} />;
      case "Bed":
        return <FaBed size={16} />;
      case "Shower":
        return <FaShower size={16} />;
      case "Pool":
        return <FaSwimmingPool size={16} />;
      case "Spa":
        return <FaSpa size={16} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-62 border border-gray-300 rounded-2xl">
      <Image
        src={property.image}
        alt={property.name}
        className="w-full h-40 object-cover rounded-t-2xl"
      />
      <div className="p-2">
        <h2 className="font-bold text-lg mt-2">{property.name}</h2>
        <p className="text-gray-600">{property.location}</p>
        <div className="mt-2 bg-gray-300 h-auto">
          <p className="text-sm text-gray-500">{property.description}</p>
        </div>
        <div className="mt-2">
          {property.amenities.map((amenity, index) => (
            <div key={index} className="flex items-center space-x-1">
              {renderAmenityIcon(amenity)}
              <p className="text-sm text-gray-500 px-1" >{amenity}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center mt-2">
          <p className="text-sm font-bold w-8 bg-green-600 text-white text-center h-6 rounded-lg">
            {property.rating}
          </p>
          <div className="ml-2">
            <p className="font-semibold">{property.reviewSummary}</p>
            <p className="text-sm text-gray-500">{property.reviews} reviews</p>
          </div>
        </div>
        <div className="mt-4 flex justify-end text-right">
          <div>
            <p className="text-xl font-bold">${property.pricePerNight}</p>
            <p className="text-sm text-gray-500">per night</p>
            <p className="text-sm text-gray-500">${property.totalPrice} total</p>
            <p className="text-xs text-gray-500">includes taxes & fees</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarCard;
