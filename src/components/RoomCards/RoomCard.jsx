import Image from "next/image";
import React from "react";
import { FaWifi, FaBed, FaRegStar, FaArrowAltCircleUp } from "react-icons/fa";

const RoomCard = ({
  image,
  title,
  rating,
  reviewText,
  reviews,
  price,
  size,
  wifi,
  sleeps,
  bedType,
  refundable,
  refundDate,
}) => {
  return (
    <div className="w-84 border border-gray-300 rounded-2xl shadow-md">
      <Image
        src={image || "/default-room.jpg"}
        alt={title}
        className="w-full h-60 object-cover rounded-t-2xl"
      />

      <div className="p-4 flex flex-col h-[300px] justify-between">
        <div>
          <h2 className="text-lg font-semibold mt-2">{title}</h2>

          <div className="flex items-center space-x-2 mt-1">
            <p className="font-bold">{rating}</p>
            <FaRegStar className="text-yellow-500" />
            <p className="text-sm">{reviewText}</p>
            <p className="text-sm text-gray-600">{reviews} reviews</p>
          </div>

          <p className="text-lg font-semibold mt-2">${price}/night</p>
          <p className="text-sm text-gray-500">
            {size} sq.ft •{" "}
            {wifi && (
              <span className="flex items-center space-x-1">
                <FaWifi  size={16} />
                <span>Free Wifi</span>
              </span>
            )}
          </p>
          <p className="text-sm">
            <span className="flex items-center space-x-1">
              <FaBed size={16} />
              <span>{sleeps} Sleeps • {bedType}</span>
            </span>
          </p>

          <p className="text-sm text-green-700 mt-2">
            {refundable ? "Fully Refundable" : "Non-refundable"}
          </p>
          {refundable && (
            <p className="text-sm text-gray-600">Before {refundDate}</p>
          )}
        </div>

        <div className="pt-3">
          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md">
            Reserve Now
          </button>
          <p className="text-sm text-gray-600 mt-1 text-center">You will not be charged now</p>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
