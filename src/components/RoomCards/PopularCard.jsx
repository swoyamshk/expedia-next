import React from "react";
import Image from "next/image";

const PopularCard = ({ activity }) => {
  return (
    <div className="w-52 border-2 border-gray-300 rounded-2xl"> 
      <Image src={activity.image} alt={activity.name} className="w-full h-40 object-cover rounded-t-2xl" />
      <div className="p-2">
        <h2 className="font-bold text-md mt-2">{activity.name}</h2>
        <p className="text-gray-600">{activity.distance}</p>
        <p className="text-gray-600">{activity.rating} ({activity.reviews} reviews)</p>

        <div className="mt-4 justify-end text-right">
          <div>
            <h2 className="text-xl font-bold">${activity.price}</h2>
            <p className="text-sm text-gray-500">per traveler</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
