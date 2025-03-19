import React from "react";

const StickyNavbar = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center py-2 w-full border-b border-gray-200">
        <nav className="flex">
          <ul className="flex space-x-6">
            <li>
              <a
                href="#"
                className="relative text-gray-700 hover:text-gray-900 pb-1 transition-colors duration-300 group"
              >
                Overview
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative text-gray-700 hover:text-gray-900 pb-1 transition-colors duration-300 group"
              >
                About
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative text-gray-700 hover:text-gray-900 pb-1 transition-colors duration-300 group"
              >
                Rooms
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative text-gray-700 hover:text-gray-900 pb-1 transition-colors duration-300 group"
              >
                Accessibility
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative text-gray-700 hover:text-gray-900 pb-1 transition-colors duration-300 group"
              >
                Policies
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex space-x-4">
          <button className="border bg-blue-600 text-white rounded-3xl w-32 p-2 text-md inline-block hover:bg-blue-600 hover:border-blue-600 transition-colors duration-300">
            Select a room
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyNavbar;