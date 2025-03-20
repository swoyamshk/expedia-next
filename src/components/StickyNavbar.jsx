"use client"
import React, { useState, useEffect } from "react";

const StickyNavbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full overflow-x-auto scroll-smooth ${isSticky ? "sticky top-0 z-10 bg-white" : ""}`}
    >
      <div className="flex justify-between items-center py-2 w-full border-b border-gray-200 min-w-max">
        <nav className="flex">
          <ul className="flex space-x-6 sm:space-x-3 md:space-x-6 px-2">
            <li>
              <a
                href="#overview"
                className="relative text-gray-700 hover:text-gray-900 pb-1 transition-colors duration-300 group text-sm md:text-base whitespace-nowrap">
                Overview
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="relative text-gray-700 hover:text-gray-900 pb-1 transition-colors duration-300 group text-sm md:text-base whitespace-nowrap"
              >
                About
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </li>
            <li>
              <a
                href="#rooms"
                className="relative text-gray-700 hover:text-gray-900 pb-1 transition-colors duration-300 group text-sm md:text-base whitespace-nowrap" >
                Rooms
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </li>
            <li>
              <a
                href="#accessibility"
                className="relative text-gray-700 hover:text-gray-900 pb-1 transition-colors duration-300 group text-sm md:text-base whitespace-nowrap"
              >
                Accessibility
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </li>
            <li>
              <a
                href="#policies"
                className="relative text-gray-700 hover:text-gray-900 pb-1 transition-colors duration-300 group text-sm md:text-base whitespace-nowrap"
              >
                Policies
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex pr-2">
          <button className="hidden font-bold =:inline-block sm:border md:w-32 p-2 text-sm md:text-md bg-blue-600 text-white rounded-3xl w-28 hover:bg-blue-700 transition-colors duration-300 whitespace-nowrap">
            Select a room
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyNavbar;
