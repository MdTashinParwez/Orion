import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets'


function Hero() {
  //auto image code 
  const images =[assets.hero_img,assets.hero_img2,assets.hero_img3] //array of image

  const [currentIndex,setCurrentIndex] = useState(0); // trac the active index

  //auto increment evry 5sec
  useEffect(()=>{
    const interval = setInterval(()=>{
      setCurrentIndex((prev)=>
      prev== images.length -1 ? 0: prev+1);
    },2000);
    return()=>clearInterval(interval);
  },[images.length])

  





  return (

    <div className='flex flex-col sm:flex-row border  rounded-md   border-gray-400'>
        {/** left side */}
        <div className="w-ful sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
           <div className='text-[#414141]'>
            <div className='flex items-center gap-2'>
                <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                <p className='font-medium text-sm md:text-base'>OUR BESTSELLER</p>

            </div>
            
            <h1 className=' poppins-thin text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrival</h1>
            <div className="flex items-center gap-2">
                <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
               
            </div>

        </div>
     </div>

     {/** right side */}

       <div className='w-full sm:w-1/2  relative h-[400px] sm:h-[500px] overflow-hidden '>
          {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Hero"
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
       
       </div>
        
        
      
    </div>
  )
}

export default Hero
