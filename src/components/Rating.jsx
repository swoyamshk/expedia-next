import React from "react";
import ReviewCards from "./ReviewCard";

const Rating = () => {
  return (
    <div className="flex flex-col mt-10 sm:flex-row ml-5 sm:m-0 sm:mt-5 sm:flex ">
      <div className="sm:m-0 w-86 flex-shrink-0 space-y-2">
        <h1 className="text-6xl font-normal text-green-800">8.0/10</h1>
        <h3>Very Good</h3>
        <h4>4,403 verified Reviews</h4>
      </div>

      <div className="flex-1">
        <ReviewCards />
      </div>
    </div>
  );
};

export default Rating;
