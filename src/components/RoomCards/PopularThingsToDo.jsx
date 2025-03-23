import React from "react";
import PopularCard from "./PopularCard";

const PopularThingsTodo = ({ activities }) => {
  if (!activities || activities.length === 0) {
    return <div>No activities available.</div>;
  }
  
  return (
    <div className="overflow-x-auto flex-nowrap whitespace-nowrap no-scrollbar">
      <div className="flex space-x-4">
        {activities.map((activity, index) => (
          <PopularCard key={index} activity={activity} />
        ))}
      </div>
    </div>
  );
};



export default PopularThingsTodo;
