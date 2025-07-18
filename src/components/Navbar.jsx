import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { Link ,NavLink } from 'react-router-dom' 

function Navbar() {
    const [visible ,setvisible] =useState(false);

  return (
    <div className=' flex justify-between items-center py-5 font-medium -mt-8'>

      
     <Link to='/' ><img src={assets.logo}  className='w-36' alt="" /></Link>


     {/* Navbar Links */}

      <ul className='hidden sm:flex gap-8  text-gray-700'>

        <NavLink to = '/' className='flex flex-col items-center gap-1'>
          <p>HOME</p>
          <hr className='w-2/4  border-none h-[1.5px] bg-gray-700 hidden group-hover:block'/>
        </NavLink>

        <NavLink to = '/collection' className='flex flex-col items-center gap-1 '>
          <p>COLLECTION</p>
          <hr className='w-2/4  border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>

        <NavLink to = '/contact' className='flex flex-col items-center gap-1'>
          <p>CONTACT</p>
          <hr className='w-2/4  border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>

        <NavLink to = '/about' className='flex flex-col items-center gap-1'>
          <p>ABOUT</p>
          <hr className='w-2/4  border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
        
       
      </ul>

      {/* side items */}
      <div className='flex items-center gap-4'>
        <img src={assets.search_icon} className='w-5 cursor-pointer hover:scale-110 transition-transform' alt="search_Icon" />

        <div className='group relative'>
          <img src={assets.profile_icon} className='w-5 cursor-pointer hover:scale-110 transition-transform' alt="cart_Icon" />

          {/* Dropdown Menu */}
          <div className='absolute dropdown-menu  pt-4 right-0 bg-white shadow-lg rounded-lg hidden group-hover:block'>

            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-700 rounded'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Order</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>

        <Link to='/cart' className='relative'>
         <img src={assets.cart_icon} className='w-5 min-w-5 hover:scale-110 transition-transform' alt="cart_icon" />
         <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[-8px] '>10</p>
        </Link>

        <img onClick={() => setvisible(true)} src={assets.menu_icon} className='w-5  cursor-pointer sm:hidden ' alt="profile_icon" />

      </div>


      {/* Mobile Menu */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-500 ${visible ? 'w-full ' :' w-0 '}`}>

        <div className='flex flex-col text-gray-600'>
          <div onClick={() => setvisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <img className='h-4  rotate-180' src={assets.dropdown_icon} alt="" />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setvisible(false)} to ='/' className='py-2 pl-6 border'>Home</NavLink> 
          <NavLink onClick={() => setvisible(false)} to ='/collection' className='py-2 pl-6 border'>Collection</NavLink>
          <NavLink onClick={() => setvisible(false)} to ='/contact' className='py-2 pl-6 border'>Contact</NavLink>
          <NavLink onClick={() => setvisible(false)} to ='/about' className='py-2 pl-6 border'>About</NavLink>

        </div>

      </div>


    </div>
  )
}

export default Navbar
