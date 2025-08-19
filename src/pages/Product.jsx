import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext'; 
function Product() {
  const {productId} = useParams();
  const {products} = useContext(ShopContext)
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const fetchProductData = async () => {
    products.map((item)=>{
      if(item.id === productId){
        setProductData(item);
        setImage(item.image);
        
        return null;
      }
    })
  }
  useEffect(() => {
    fetchProductData();  
  }, [productId, products]);

  return  productData ? (
    <div className='border-t-3 pt-10 transition-opacity ease-in duration-500 opacity-100'>
     <div className="flex gap-12 sm:gap-12  flex-col sm:flex-row-reverse">
      
      <div className="flex flex-1/2 flex-col-reverse sm:flex-row">
      <div className="flex sm:col overflow-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w[18.7%]"></div>
      </div>
      {
        productData.image.map((image, index) => (e))
      }
      
      </div> 
    </div>
  ): <div className="opacity-0"></div>
}

export default Product
