import React, { useState } from "react";
import RoomCard from "./RoomCard";
import RoomDetailsModal from "./RoomDetail";
import image from "../../../public/assets/download.jpg";
import single from "../../../public/assets/single.webp";
import double from "../../../public/assets/double.avif";
import master from "../../../public/assets/master.avif";

const rooms = [
  {
    image: master,
    title: "Deluxe Room, 1 Queen Bed",
    rating: 8.5,
    reviewText: "Very Good",
    reviews: 250,
    price: 150,
    size: 450,
    wifi: true,
    sleeps: 2,
    bedType: "Queen Bed",
    refundable: true,
    refundDate: "Mon, Apr 22",
    isPopular: true
  },
  {
    image: single,
    title: "Signature Room, 1 King Bed",
    rating: 7.8,
    reviewText: "Good",
    reviews: 195,
    price: 120,
    size: 400,
    wifi: true,
    sleeps: 2,
    bedType: "King Bed",
    refundable: true,
    refundDate: "Tue, Apr 29",
    isPopular: false
  },
  {
    image: double,
    title: "Premium Suite, 2 Double Beds",
    rating: 9.2,
    reviewText: "Excellent",
    reviews: 320,
    price: 200,
    size: 600,
    wifi: true,
    sleeps: 4,
    bedType: "2 Double Beds",
    refundable: false,
    isPopular: false
  },
];

const RoomsPage = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  
  const handleOpenModal = (room) => {
    setSelectedRoom(room);
  };
  
  const handleCloseModal = () => {
    setSelectedRoom(null);
  };
  
  return (
    <div>
      <div className="flex flex-wrap space-x-3">
        {rooms.map((room, index) => (
          <RoomCard 
            key={index} 
            {...room} 
            onClick={() => handleOpenModal(room)}
          />
        ))}
      </div>
      
      {selectedRoom && (
        <RoomDetailsModal 
          room={selectedRoom} 
          onClose={handleCloseModal} 
        />
      )}
    </div>
  );
};

export default RoomsPage;