"use client";
import React, { useState } from "react";

import logo from "../../public/assets/logo.jpg";
import { FaDownload } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Image from 'next/image';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className='px-4 md:px-8 lg:px-12 xl:px-48 shadow'>
      <nav className="flex justify-between items-center p-4 max-w-screen-xl mx-auto">
        <div className="flex items-center space-x-4 relative">
          <Image src={logo} height={40} width={120} alt="Logo" className="" />
          
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="hidden sm:flex items-center text-md border-none rounded-2xl px-3 py-2 hover:text-blue-700 "
            >
              Shop Travel<IoIosArrowDown className="ml-1" />
            </button>
            {dropdownOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-lg overflow-hidden z-10">
                <li className="hover:bg-blue-100 px-4 py-2 cursor-pointer">Trips</li>
                <li className="hover:bg-blue-100 px-4 py-2 cursor-pointer">Flights</li>
                <li className="hover:bg-blue-100 px-4 py-2 cursor-pointer">Cars</li>
                <li className="hover:bg-blue-100 px-4 py-2 cursor-pointer">Cruise</li>
                <li className="hover:bg-blue-100 px-4 py-2 cursor-pointer">Packages</li>


              </ul>
            )}
          </div>
        </div>
        
        <div className="block sm:hidden">
          <button className='flex items-center justify-center border border-gray-400 rounded-2xl p-2 text-md hover:bg-blue-100'>
            <FaDownload className='mr-1 text-blue-500' size={15} />
            Get the app
          </button>
        </div>

        <ul className="hidden sm:flex flex-wrap justify-center items-center gap-4 sm:gap-2 md:space-x-6">
          <li className="w-full sm:w-auto text-center">
            <button className='flex items-center justify-center w-full sm:w-auto border border-gray-400 rounded-2xl p-2 text-sm hover:bg-blue-100'>
              <FaDownload className='mr-1 text-blue-500' size={15}/>
              Get the app
            </button>
          </li>
          <li><a href="#" className="hover:text-blue-600 inline-block py-2">English</a></li>
          <li><a href="#" className="hover:text-blue-600 inline-block py-2">List your property</a></li>
          <li><a href="#" className="hover:text-blue-600 inline-block py-2">Support</a></li>
          <li><a href="#" className="hover:text-blue-600 inline-block py-2">Trips</a></li>
          <li><a href="#" className="hover:text-blue-600 inline-block py-2">Sign in</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
