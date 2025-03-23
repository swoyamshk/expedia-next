import React, { useState, useEffect, useRef } from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaUser } from "react-icons/fa";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // Main style file
import "react-date-range/dist/theme/default.css"; // Theme CSS file

const SearchBar = () => {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(), // Default to today
      endDate: new Date(new Date().setDate(new Date().getDate() + 7)), // Default to 7 days later
      key: "selection",
    },
  ]);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isTravelersOpen, setIsTravelersOpen] = useState(false);
  const [travelers, setTravelers] = useState(2);
  const [rooms, setRooms] = useState(1);
  const travelersRef = useRef(null);

  // Date Picker functionality
  const handleDateSelect = (ranges) => {
    setDateRange([ranges.selection]);
  };

  const toggleDatePicker = () => {
    setIsDatePickerOpen(!isDatePickerOpen);
  };

  const applyDateRange = () => {
    setIsDatePickerOpen(false);
  };

  const cancelDateRange = () => {
    setDateRange([
      {
        startDate: new Date(),
        endDate: new Date(new Date().setDate(new Date().getDate() + 7)), // Reset to 7 days later
        key: "selection",
      },
    ]);
    setIsDatePickerOpen(false);
  };

  const displayDate = dateRange[0].endDate
    ? `${dateRange[0].startDate.toLocaleDateString()} - ${dateRange[0].endDate.toLocaleDateString()}`
    : dateRange[0].startDate.toLocaleDateString();

  // Travelers modal functionality
  const toggleTravelers = () => {
    setIsTravelersOpen(!isTravelersOpen);
  };

  const applyTravelers = () => {
    setIsTravelersOpen(false);
  };

  const cancelTravelers = () => {
    setTravelers(2);
    setRooms(1);
    setIsTravelersOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (travelersRef.current && !travelersRef.current.contains(event.target)) {
        setIsTravelersOpen(false);
      }
    }

    if (isTravelersOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isTravelersOpen]);

  return (
    <div className="hidden sm:flex flex-col md:flex-row gap-3 w-full my-4 px-2 md:px-0">
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
          <option value="" disabled>
            Where to?
          </option>
          <option value="north-las-vegas">North Las Vegas, Nevada, United States</option>
          <option value="las-vegas-strip">Las Vegas Strip, Nevada</option>
          <option value="downtown">Downtown Las Vegas</option>
          <option value="henderson">Henderson, Nevada</option>
        </select>
      </div>

      {/* Date Range Picker */}
      <div className="relative flex-1">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          <FaCalendarAlt size={18} />
        </div>
        <input
          type="text"
          value={displayDate}
          onClick={toggleDatePicker}
          readOnly
          className="border border-gray-300 w-full h-12 pl-10 pr-3 rounded-lg text-md focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white cursor-pointer"
          placeholder="Select dates"
        />
        {isDatePickerOpen && (
          <div className="absolute z-10 top-14 left-0 bg-white border border-gray-300 rounded-lg shadow-lg">
            <DateRange
              editableDateInputs={true}
              onChange={handleDateSelect}
              moveRangeOnFirstSelection={false}
              ranges={dateRange}
              months={2} // Show two months side by side
              direction="horizontal" // Display months horizontally
              minDate={new Date()} // Prevent past dates
              className="rounded-lg"
              rangeColors={["#3b82f6"]} // Blue highlight for selected range (similar to Expedia)
              showDateDisplay={false} // Hide the default date display on top
            />
            <div className="flex justify-end gap-2 p-4">
              <button onClick={cancelDateRange} className="text-gray-600 hover:underline">
                Cancel
              </button>
              <button onClick={applyDateRange} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Apply
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Travelers Modal */}
      <div className="relative flex-1" ref={travelersRef}>
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          <FaUser size={18} />
        </div>
        <button
          onClick={toggleTravelers}
          className="border border-gray-300 w-full h-12 pl-10 pr-3 rounded-lg text-md focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white text-left"
        >
          {travelers} traveler{travelers > 1 ? "s" : ""}, {rooms} room{rooms > 1 ? "s" : ""}
        </button>

        {isTravelersOpen && (
          <div className="absolute top-14 left-0 w-full bg-white shadow-md border border-gray-300 rounded-lg p-4 z-50">
            <h2 className="text-lg font-semibold mb-4">Travelers & Rooms</h2>

            {/* Travelers Count */}
            <div className="flex justify-between items-center mb-3">
              <span className="text-md">Travelers</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setTravelers((prev) => Math.max(1, prev - 1))}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <span>{travelers}</span>
                <button
                  onClick={() => setTravelers((prev) => prev + 1)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>
            </div>

            {/* Rooms Count */}
            <div className="flex justify-between items-center mb-4">
              <span className="text-md">Rooms</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setRooms((prev) => Math.max(1, prev - 1))}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <span>{rooms}</span>
                <button
                  onClick={() => setRooms((prev) => prev + 1)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex justify-end gap-2">
              <button onClick={cancelTravelers} className="text-gray-600 hover:underline">
                Cancel
              </button>
              <button onClick={applyTravelers} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Apply
              </button>
            </div>
          </div>
        )}
      </div>

      <button className="border border-thin bg-blue-600 text-white rounded-full h-12 px-6 text-md font-medium inline-block hover:bg-blue-700 transition-colors duration-300 w-full md:w-auto">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
