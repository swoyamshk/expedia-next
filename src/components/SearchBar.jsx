import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaUser } from "react-icons/fa"; // Import icons from react-icons

const SearchBar = () => {
  return (
    <div className="flex flex-col md:flex-row md:space-x-2 lg:space-x-4 w-full my-4 space-y-3 md:space-y-0 px-4 md:px-0">
      
      {/* Location Selector */}
      <div className="relative flex-1">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          <FaMapMarkerAlt size={18} />
        </div>
        <select
          name="location"
          id="location"
          className="border border-gray-300 w-full h-12 pl-10 pr-3 rounded-lg text-md focus:outline-none focus:ring-2 focus:ring-blue-600 appearance-none bg-white"
          defaultValue=""
        >
          <option value="" disabled>Where to?</option>
          <option value="north-las-vegas">North Las Vegas, Nevada, United States</option>
          <option value="las-vegas-strip">Las Vegas Strip, Nevada</option>
          <option value="downtown">Downtown Las Vegas</option>
          <option value="henderson">Henderson, Nevada</option>
        </select>
      </div>

      {/* Date Selector */}
      <div className="relative flex-1">
      <input
        type="date"
        className="border border-gray-300 w-80 h-12 p-3 rounded-lg text-md focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
      </div>

      {/* Travelers Selector */}
      <div className="relative flex-1">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          <FaUser size={18} />
        </div>
        <select
          name="travelers"
          id="travelers"
          className="border border-gray-300 w-full h-12 pl-10 pr-3 rounded-lg text-md focus:outline-none focus:ring-2 focus:ring-blue-600 appearance-none bg-white"
          defaultValue="2-1"
        >
          <option value="2-1">2 travelers, 1 room</option>
          <option value="1-1">1 traveler, 1 room</option>
          <option value="3-1">3 travelers, 1 room</option>
          <option value="4-1">4 travelers, 1 room</option>
          <option value="4-2">4 travelers, 2 rooms</option>
        </select>
      </div>


      <button className="border border-thin bg-blue-600 text-white rounded-full h-12 px-6 text-md font-medium inline-block hover:bg-blue-700 transition-colors duration-300 w-full md:w-auto">
        Search
      </button>

    </div>
  );
};

export default SearchBar;