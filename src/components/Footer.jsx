// import React from 'react'
// import { assets } from '../assets/assets'

// function Footer() {
//   return (
//     <div>
//         <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-10 my-10 mt-40 text-sm">
//             <div>
//                 <img src={assets.logo}  className ='w-28 h-auto objecon 'alt="" />
//                 <p className='w-full md:w-2/3 text-gray-600'>
//                     "Orion is a modern platform built to simplify digital experiences. We focus on speed, security, and user-first design to help you get things done efficiently."                </p>
//             </div>

//             <div>
//                 <p className='text-xl font-medium mb-5'> Quick Links </p>
//                 <ul className='flex flex-col gap-1 text-gray-600'>
//                     <li>Home</li>
//                     <li>Delivery</li>
//                     <li>About Us</li>
//                     <li>Our Polincy</li>
//                 </ul>   
//             </div>

//             <div>
//                 <p className='text-xl font-medium mb-5'>Contact Us</p>
//                 <ul className='flex flex-col gap-1 text-gray-600'>
//                     <li>+91-629945588</li>
//                     <li>CustomerCare@orian.com</li> 

//                 </ul>
//             </div>
//         </div>

//     </div>
//   ) 
// }

// export default Footer

import React from 'react';
import { assets } from '../assets/assets';

function Footer() {
  return (
    <footer className="bg-white border-t text-sm text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Grid layout: responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">

          {/* Logo & Description */}
          <div className="col-span-1 lg:col-span-2">
            <img src={assets.logo} alt="Orbyn Logo" className="w-24 mb-4" />
            <p className="max-w-xs text-gray-500 leading-relaxed">
              Orion is your destination for curated, high-quality products — blending style and functionality for the modern lifestyle.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-black mb-4">Company</h3>
            <ul className="space-y-2">
              <li className="hover:text-black cursor-pointer transition">About Us</li>
              <li className="hover:text-black cursor-pointer transition">Careers</li>
              <li className="hover:text-black cursor-pointer transition">Blog</li>
              <li className="hover:text-black cursor-pointer transition">Contact</li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-semibold text-black mb-4">Help</h3>
            <ul className="space-y-2">
              <li className="hover:text-black cursor-pointer transition">Shipping</li>
              <li className="hover:text-black cursor-pointer transition">Returns</li>
              <li className="hover:text-black cursor-pointer transition">Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-black mb-4">Connect</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Email: support@orion.com</li>
              <li>Phone: +91-629945588</li>
              <li>Location: Delhi, India</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t pt-4 text-xs text-center text-gray-400">
          © 2025 Orion. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;



