import React from 'react'
import {assets} from '../assets/assets'

function OurPolicy() {
  return (
    
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700 '>
        {/* <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">Our Policies</h2>
        <p className="text-sm text-gray-500 mt-2">What makes us a trusted choice</p>
        </div> */}
      
      <div >
        <img src={assets.exchange_icon}  className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>Easy Exchange.</p>
        <p className="text-gray-400">Not satisfied? Exchange within 7 days with no hassle.</p>
      </div>
      <div>
        <img src={assets.quality_icon}  className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>Top Quality</p>
        <p className="text-gray-400">We guarantee premium quality products, every time.</p>
      </div>
      <div>
        <img src={assets.support_img}  className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>24/7 Support</p>
        <p className="text-gray-400">Our team is here to help you anytime you need us.</p>
      </div>


    </div>
  )

}

export default OurPolicy
