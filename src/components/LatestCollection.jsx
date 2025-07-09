import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
// import Collection from '../pages/collection';

function LatestCollection() {
    const {products} = useContext(ShopContext);

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'Collection'}/>
            
        </div>
      
    </div>
  )
}

export default LatestCollection
