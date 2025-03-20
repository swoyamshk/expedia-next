import React from 'react';
import Image from "next/image";

import logo from "../../public/assets/logo.jpg";
const ExpediaFooter = () => {
  return (
    <footer className="w-full bg-blue-50 p-8 mt-5">
      <div className="max-w-6xl mx-auto">
        {/* Logo Section */}
        <div className="mb-8">
          <Image src={logo} alt="Expedia Group" className="h-6 w-22" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-medium text-gray-800 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-500 hover:underline text-sm">About</a></li>
              <li><a href="#" className="text-blue-500 hover:underline text-sm">Jobs</a></li>
              <li><a href="#" className="text-blue-500 hover:underline text-sm">List your property</a></li>
              <li><a href="#" className="text-blue-500 hover:underline text-sm">Partnerships</a></li>
              <li><a href="#" className="text-blue-500 hover:underline text-sm">Newsroom</a></li>
              <li><a href="#" className="text-blue-500 hover:underline text-sm">Investor Relations</a></li>
              <li><a href="#" className="text-blue-500 hover:underline text-sm">Advertising</a></li>
              <li><a href="#" className="text-blue-500 hover:underline text-sm">Affiliate Marketing</a></li>
              <li><a href="#" className="text-blue-500 hover:underline text-sm">Feedback</a></li>
            </ul>
          </div>
          
          {/* Explore Column */}
          <div>
            <h3 className="font-medium text-gray-800 mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-500 hover:underline text-sm">United States of America travel guide</a></li>
              <li><a href="#" className="text-blue-500 hover:underline text-sm">Hotels in United States of America</a></li>
              <li><a href="#" className="text-blue-500 hover:underline text-sm">Vacation rentals in United States of America</a></li>
              <li><a href="#" className="text-blue-500 hover:underline text-sm">Vacation packages in United States of America</a></li>
              <li><a href="#" className="text-blue-500 hover:underline text-sm">Domestic flights</a></li>
              <li><a href="#" className="text-blue-500 hover:underline text-sm">Car rentals in United States of America</a></li>
              <li><a href="#" className="text-blue-500 hover:underline text-sm">All accommodation types</a></li>
              <li><a href="#" className="text-blue-500 hover:underline text-sm">One Key credit cards</a></li>
            </ul>
          </div>
          
          {/* Policies Column */}
          <div>
            <h3 className="font-medium text-gray-800 mb-4">Policies</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-500 hover:underline text-sm">Privacy</a></li>
              <li><a href="#" className="text-blue-500 hover:underline text-sm">Cookies</a></li>
              <li><a href="#" className="text-blue-500 hover:underline text-sm">Terms of use</a></li>
              <li><a href="#" className="text-blue-500 hover:underline text-sm">One Key™ terms and conditions</a></li>
              <li><a href="#" className="text-blue-500 hover:underline text-sm">Vrbo terms and conditions</a></li>
              <li><a href="#" className="text-blue-500 hover:underline text-sm">Accessibility</a></li>
              <li><a href="#" className="text-blue-500 hover:underline text-sm">Your privacy choices</a></li>
              <li><a href="#" className="text-blue-500 hover:underline text-sm">Content guidelines and reporting content</a></li>
            </ul>
          </div>
          
          {/* Help Column */}
          <div>
            <h3 className="font-medium text-gray-800 mb-4">Help</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-500 hover:underline text-sm">Support</a></li>
              <li><a href="#" className="text-blue-500 hover:underline text-sm">Cancel your hotel or vacation rental booking</a></li>
              <li><a href="#" className="text-blue-500 hover:underline text-sm">Cancel your flight</a></li>
              <li><a href="#" className="text-blue-500 hover:underline text-sm">Refund basics</a></li>
              <li><a href="#" className="text-blue-500 hover:underline text-sm">Use an Expedia coupon</a></li>
              <li><a href="#" className="text-blue-500 hover:underline text-sm">International travel documents</a></li>
            </ul>
          </div>
        </div>
        
        <div className="text-xs text-gray-600 border-t border-gray-200 pt-4">
          <p>© 2025 Expedia, Inc., an Expedia Group company. All rights reserved. Expedia and the Expedia Logo are trademarks or registered trademarks of Expedia, Inc. CST# 2029030-50.</p>
        </div>
      </div>
    </footer>
  );
};

export default ExpediaFooter;