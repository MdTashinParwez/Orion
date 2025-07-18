import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';
// import Collection from '../pages/collection';

function LatestCollection() {

    const {products} = useContext(ShopContext);
    const [latestProducts,setLatestProducts] = useState([]);

    useEffect(()=>{
      setLatestProducts(products.slice(0,10));
    },[])
  return (
    <div className='my-10  bg-gray-50 py-10 rounded-lg shadow-sm'> {/* bg-gray-50 py-10 rounded-lg shadow-sm updated class*/}
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'Collection'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
  Discover the latest trends in our collection, carefully curated to match your style and elevate your wardrobe. Shop the newest arrivals now and stay ahead in fashion.
            </p>
        </div> 


      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {
          latestProducts.map((item,index)=>(
          <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))
        }
      </div>
      
    </div>
  )
}

export default LatestCollection
