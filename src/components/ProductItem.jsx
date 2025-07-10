import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import {Link} from 'react-router-dom'
function ProductItem({id,image,name,price}) {

    const{currency} = useContext(ShopContext)

  return (
    <div className="p-3 hover:shadow-md rounded-lg transition duration-300">
        <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
        <div className='overflow-hidden'>
        <img className='hover:scale-110 rounded-lg transition-transform duration-300' src={image[0]} alt="" />
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className="text-sm font-medium">{currency}{price}</p>
        </Link>
      
    </div> 
  )
}

export default ProductItem
