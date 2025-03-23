import React from "react";
import SearchBar from "./SearchBar";

import RoomsPage from "./RoomCards/RoomsPage";
import SimilarProperties from "./RoomCards/SimilarProperties";
// import PopularThingsTodo from "./RoomCards/PopularThingsTodo";
import PopularThingsTodo from "./RoomCards/PopularThingsTodo";

const Rooms = ({activities}) => {
 
  return (
    <div id="rooms" className="mt-5 px-2 md:px-0">
      <h1 className="text-2xl md:text-3xl font-medium">Choose your room</h1>
      <SearchBar />
      <div className="flex flex-wrap gap-2 py-4">
        <button className="rounded-3xl px-4 border border-gray-300 p-1 text-sm">
          All Rooms
        </button>
        <button className="rounded-3xl px-4 border border-gray-300 p-1 text-sm">
          1 Bed
        </button>
        <button className="rounded-3xl px-4 border border-gray-300 p-1 text-sm">
          2 Rooms
        </button>
      </div>

      <RoomsPage />

      <div className="p-4 md:p-7 mt-6 bg-amber-50 rounded-2xl">
        <h1 className="text-2xl md:text-4xl font-medium">Have a question?</h1>
        <p className="mt-2 text-gray-600">
          Get instant answers with AI-powered search of property information and
          reviews.
        </p>
        <div className="mt-4">
          <h3 className="text-lg font-medium">Ask a question</h3>
          <div className="relative mt-2">
            <input
              type="text"
              placeholder="Is there free parking?"
              className="w-full p-3 pr-12 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <hr className="mt-6 border-gray-300" />
      <h2 className="text-xl font-medium my-4">
        Similar properties to Westgate Las Vegas Resort & Casino
      </h2>
      <SimilarProperties />
      <hr className="my-6 border-gray-300" />

      <h2 className="text-xl font-medium my-4">
        71 popular things to do nearby
      </h2>
      <PopularThingsTodo activities={activities} />
    </div>
  );
};

export default Rooms;
