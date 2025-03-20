import Image from "next/image";
import React from "react";
import { FaWifi, FaBed, FaRegStar } from "react-icons/fa";



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
  isPopular  
}) => {
  return (
    <div className="ml-3 sm:ml-auto mb-5 h-auto sm:w-84 min-h-[700px] flex flex-col border border-gray-300 rounded-2xl shadow-md">
      <div className="relative">
        <Image
          src={image || "/default-room.jpg"}
          alt={title}
          className="w-full h-48 object-cover rounded-t-2xl"
        />

        {isPopular && (
          <div className="absolute w-full top-0 left-0 bg-blue-600 text-white text-sm font-bold py-2 px-3 rounded-t-2xl">
            Popular among travelers
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col flex-grow">
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
          <FaWifi size={16} />
          <span>Free Wifi</span>
        </span>
      )}
    </p>
    <p className="text-sm">
      <span className="flex items-center space-x-1">
        <FaBed size={16} />
        <span>
          {sleeps} Sleeps • {bedType}
        </span>
      </span>
    </p>

    <p className="text-sm text-green-700 mt-2">
      {refundable ? "Fully Refundable" : "Non-refundable"}
    </p>
    {refundable && (
      <p className="text-sm text-gray-600">Before {refundDate}</p>
    )}
  </div>
  <hr className="text-gray-300 my-3 " />
  <div>
    <h2>Extras</h2>
    <div className="flex items-center justify-between space-x-2">
      <div className="flex items-center space-x-2">
        <input
          type="radio"
          className="w-4 h-4 text-blue-600 border-2 border-gray-300"
        />
        <label className="text-sm">Resort credit</label>
      </div>
      <p className="text-sm ml-auto">+ $0</p>
    </div>
    <div className="flex items-center justify-between space-x-2 mt-2">
      <div className="flex items-center space-x-2">
        <input
          type="radio"
          className="w-6 h-6 text-blue-600 border-2 border-gray-300"
        />
        <label className="text-sm">
          USD 30 food and beverage credit per room, per stay
        </label>
      </div>
      <p className="text-sm ml-auto">+$38</p>
    </div>
  </div>
</div>


      <div className="pt-3 pb-4 px-4">
        <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md">
          Reserve Now
        </button>
        <p className="text-sm text-gray-600 mt-1 text-center">
          You will not be charged now
        </p>
      </div>
    </div>
  );
};

export default RoomCard;