import React, { useState, useContext, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

function Collection() {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [FilterProducts,setFilterProducts] = useState([]);
  const [category,setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const toggleCategory = (e) =>{
    if(category.includes(e.target.value)){
      setCategory(prev=> prev.filter(item => item !== e.target.value))
      
    }
    else{
      setCategory(prev => [...prev,e.target.value])
    }
  }
  const toggleSubCategory = (e) =>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev=> prev.filter(item => item !== e.target.value))
      
    }
    else{
      setSubCategory(prev => [...prev,e.target.value])
    }
  }

  const applyFilter = ()=>{
    
    let productsCopy = products.slice();

    if(category.length>0){
     productsCopy = productsCopy .filter(item => category.includes(item.category));
   }

    if(subCategory.length>0){
     productsCopy = productsCopy .filter(item => subCategory.includes(item.subCategory));
   }



    setFilterProducts(productsCopy)
  }




  
  
  useEffect(()=>{
    applyFilter()
  },[category,subCategory])
  

 

  return (
    <div className='flex flex-col sm:flex-row gap-6 sm:gap-10 pt-10 border-t px-4 sm:px-10'>

      {/* Filter Sidebar */}
      <div className='min-w-[240px]'>

        {/* Filter Toggle Header */}
        <div
          onClick={() => setShowFilter(!showFilter)}
          className='flex justify-between items-center my-2 text-xl font-semibold text-gray-800 cursor-pointer sm:cursor-default'
        >
          <span>FILTER</span>
          <img
            className={`h-3 sm:hidden transform transition-transform duration-300 ${showFilter ? 'rotate-90' : ''}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </div>

        {/* Categories Section */}
        <div className={`border border-gray-200 rounded-lg shadow-sm px-5 py-4 mb-5 transition-all duration-300 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium text-gray-800'>CATEGORIES</p>
          <div className='flex flex-col gap-3 text-sm font-light text-gray-700'>
            <label className='flex items-center gap-2 cursor-pointer'>
              <input className='w-4 h-4 hover:scale-110 transition' type="checkbox" value={'Men'}  onChange={toggleCategory} /> Men
            </label>
            <label className='flex items-center gap-2 cursor-pointer'>
              <input className='w-4 h-4 hover:scale-110 transition' type="checkbox" value={'Women'} onChange={toggleCategory} /> Women
            </label>
            <label className='flex items-center gap-2 cursor-pointer'>
              <input className='w-4 h-4 hover:scale-110 transition' type="checkbox" value={'Kids'} onChange={toggleCategory} /> Kids
            </label>
          </div>
        </div>

        {/* Types Section */}
        <div className={`border border-gray-200 rounded-lg shadow-sm px-5 py-4 mb-5 transition-all duration-300 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium text-gray-800'>TYPES</p>
          <div className='flex flex-col gap-3 text-sm font-light text-gray-700'>
            <label className='flex items-center gap-2 cursor-pointer'>
              <input className='w-4 h-4 hover:scale-110 transition' type="checkbox" value={'Topwear'} onChange={toggleSubCategory} /> TopWear
            </label>
            <label className='flex items-center gap-2 cursor-pointer'>
              <input className='w-4 h-4 hover:scale-110 transition' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory} /> BottomWear
            </label>
            <label className='flex items-center gap-2 cursor-pointer'>
              <input className='w-4 h-4 hover:scale-110 transition' type="checkbox" value={'Winterwear'} onChange={toggleSubCategory} /> WinterWear
            </label>
          </div>
        </div>

      </div>

      {/* Right side: Add product grid or message */}
     


      <div className='flex-1'>

        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={'CHECK'} text2={'OUR COLLECTION'}/>

          {/* sort options */}
          <select className='border-2 border-gray-300 text-sm px-2'>
              <option disabled selected>Sort by</option>

            <option value="lowtohigh">Price: Low to High</option>
            <option value="highttolow"Price: High to Low></option>
            <option value="Newest">Newest</option>
          </select>
        </div>

      {/*  all products  */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
        {
          FilterProducts.map((item,index)=>(
            <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
          ))
        }
      </div>
      </div>

    </div>
  );
}

export default Collection;
