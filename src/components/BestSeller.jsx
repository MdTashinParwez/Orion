import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';
import { products } from "../assets/assets";
import { Link } from 'react-router-dom';


function BestSeller() {
    const {products} = useContext(ShopContext);
    const[bestSeller, setBestSeller] = useState([])

    useEffect(()=>{
        const bestProduct = products.filter((item)=>(item.bestseller));
        setBestSeller(bestProduct.slice(0,5))
    },[])
  return (
    <div className='my-10 px-4 sm:px-8 lg:px-16 py-10 bg-[#f9f9f9] rounded-xl'>
      <div className='text-center text-3xl py-8 sm:text-4xl  text-gray-800'>
       <Title text1={'BEST'} text2={'SELLER'} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 mt-3">
  Explore our most loved and top-rated products — handpicked just for you. These best sellers combine quality and style, making them customer favorites.
        </p>
        <div className='grid p-1 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 animate-fadeIn' >
            {
                bestSeller.map((item,index)=> (
                    <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}  />
                ))   
                
            }
        </div>
        </div>  
        <div className='text-center mt-6'>
            <Link to={"/collection"}>
              <button  className='bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-800 transition'>
                          View All Best Sellers
              </button>
            </Link>
        </div>
    
    </div>
  )
}

 export default BestSeller
