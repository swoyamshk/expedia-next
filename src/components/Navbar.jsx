import React from 'react';
import logo from "../../public/assets/logo.jpg";
import { FaDownload } from "react-icons/fa";
import Image from 'next/image';


const Navbar = () => {
  return (
    <div className='px-48 shadow-sm'>
      <nav className="flex justify-between items-center p-4 max-w-screen-xl mx-auto">
        <div className="flex items-center space-x-4">
          <Image src={logo} height={40} width={120} alt="Logo" />
          <label htmlFor="selectShop" className="text-lg hover:text-blue-600">Shop Travel</label>
        </div>

        <ul className="flex items-center space-x-6">
          <li>
            <button className='flex border border-gray-400 rounded-2xl p-2 text-sm  hover:bg-blue-100'>
            <FaDownload className='mt-0.5 mr-1  text-blue-500' size={15}/>
            Get the app</button>
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