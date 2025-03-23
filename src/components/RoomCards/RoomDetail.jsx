import React from "react";
import Image from "next/image";
import { FaWifi, FaBed, FaRegStar, FaTimes } from "react-icons/fa";

const RoomDetail = ({ room, onClose }) => {
  if (!room) return null;
  
  const {
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
  } = room;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
<div className="bg-white rounded-lg w-full max-w-xl max-h-[90vh] overflow-y-auto">
<div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FaTimes size={24} />
          </button>
        </div>

        <div className="p-4">

            <div className="">
              <div className="relative h-64 w-full">
                <Image
                  src={image || "/default-room.jpg"}
                  alt={title}
                  className="rounded-lg object-cover"
                  layout="fill"
                />
                {isPopular && (
                  <div className="absolute top-0 left-0 bg-blue-600 text-white text-sm font-bold py-2 px-3 rounded-tl-lg">
                    Popular among travelers
                  </div>
                )}
              </div>

              <div className="mt-4 ">
                <div className="flex items-center space-x-2 mb-2">
                  <p className="font-bold">{rating}</p>
                  <FaRegStar className="text-yellow-500" />
                  <p className="text-sm">{reviewText}</p>
                  <p className="text-sm text-gray-600">({reviews} reviews)</p>
                </div>

                <p className="text-xl font-semibold text-blue-600">${price}/night</p>
                
                {refundable ? (
                  <p className="text-sm text-green-700 mt-1">
                    Fully Refundable before {refundDate}
                  </p>
                ) : (
                  <p className="text-sm text-red-600 mt-1">Non-refundable</p>
                )}
              </div>


            <div className="md:w-1/2">
              <h3 className="font-semibold text-lg mb-3">Room Details</h3>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <FaBed size={20} className="text-gray-700" />
                  <p>{sleeps} Sleeps • {bedType}</p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="w-5 flex justify-center">
                    <span className="text-gray-700">⊡</span>
                  </div>
                  <p>{size} sq.ft room size</p>
                </div>
                
                {wifi && (
                  <div className="flex items-center space-x-2">
                    <FaWifi size={20} className="text-gray-700" />
                    <p>Free high-speed WiFi</p>
                  </div>
                )}
              </div>
              
              <h3 className="font-semibold text-lg mt-6 mb-3">Add-ons</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="addon"
                      className="w-4 h-4 text-blue-600 border-2 border-gray-300"
                    />
                    <label className="text-sm">Resort credit</label>
                  </div>
                  <p className="text-sm">+ $0</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="addon"
                      className="w-4 h-4 text-blue-600 border-2 border-gray-300"
                    />
                    <label className="text-sm">
                      USD 30 food and beverage credit per room, per stay
                    </label>
                  </div>
                  <p className="text-sm">+ $38</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="addon"
                      className="w-4 h-4 text-blue-600 border-2 border-gray-300"
                    />
                    <label className="text-sm">
                      Breakfast included
                    </label>
                  </div>
                  <p className="text-sm">+ $25/day</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t p-4 flex justify-end space-x-3">
          <button 
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
          >
            Close
          </button>
          <button 
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Reserve Now - ${price}/night
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;