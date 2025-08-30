// import React, { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { ShopContext } from "../context/ShopContext";
// import { assets } from "../assets/assets";
// import RelatedProducts from "../components/RelatedProducts";
// import { motion } from "framer-motion";

// function Product() {
//   const { productId } = useParams();
//   const { products, currency } = useContext(ShopContext);
//   const [productData, setProductData] = useState(false);
//   const [image, setImage] = useState("");
//   const [size, setSize] = useState("");

//   const fetchProductData = () => {
//     products.forEach((item) => {
//       if (item._id === productId) {
//         setProductData(item);
//         setImage(item.image[0]); // default to first image
//       }
//     });
//   };

//   useEffect(() => {
//     fetchProductData();
//   }, [productId, products]);

//   return productData ? (
//     <div className="border-t pt-10 transition-opacity ease-in duration-500 opacity-100">
//       {/* Product Section */}
//       <div className="flex flex-col lg:flex-row gap-12">
//         {/* Image Section */}
//         <div className="flex flex-col sm:flex-row gap-6 lg:w-1/2">
//           {/* Thumbnails */}
//           <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-y-auto">
//             {productData.image.map((item, index) => (
//               <motion.img
//                 whileHover={{ scale: 1.05 }}
//                 onClick={() => setImage(item)}
//                 src={item}
//                 key={index}
//                 className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
//                   image === item ? "border-black" : "border-gray-200"
//                 }`}
//                 alt=""
//               />
//             ))}
//           </div>

//           {/* Main Image */}
//           <motion.div
//             key={image}
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.4 }}
//             className="flex-1"
//           >
//             <img
//               className="w-full h-auto rounded-xl shadow-md"
//               src={image}
//               alt=""
//             />
//           </motion.div>
//         </div>

//         {/* Info Section */}
//         <div className="flex-1">
//           <h1 className="font-semibold text-3xl mb-3">{productData.name}</h1>

//           {/* Ratings */}
//           <div className="flex items-center gap-1 mb-4">
//             {Array(5)
//               .fill()
//               .map((_, i) => (
//                 <img
//                   key={i}
//                   src={assets.star_icon}
//                   alt="star"
//                   className="w-4"
//                 />
//               ))}
//             <p className="pl-2 text-gray-500">(154 reviews)</p>
//           </div>

//           {/* Price */}
//           <p className="text-3xl font-bold text-black-600 mb-5">
//             {currency}
//             {productData.price}
//           </p>

//           {/* Description */}
//           <p className="text-gray-600 mb-6">{productData.description}</p>

//           {/* Sizes */}
//           <div className="mb-6">
//             <p className="mb-2 font-medium">Select Size</p>
//             <div className="flex gap-3 flex-wrap">
//               {productData.sizes.map((item, index) => (
//                 <motion.button
//                   whileTap={{ scale: 0.9 }}
//                   onClick={() => setSize(item)}
//                   className={`border py-2 px-5 rounded-lg transition-all ${
//                     item === size
//                       ? "bg-black text-white border-black"
//                       : "bg-gray-100 border-gray-300 hover:border-black"
//                   }`}
//                   key={index}
//                 >
//                   {item}
//                 </motion.button>
//               ))}
//             </div>
//           </div>

//           {/* Actions */}
//           <div className="flex gap-4 mb-8">
//             <button className="bg-black text-white px-8 py-3 rounded-lg shadow hover:bg-gray-900  active:scale-95 transition-all duration-150">
//               ADD TO CART
//             </button>
//             <button className="border px-6 py-3 rounded-lg hover:bg-gray-100 active:scale-95 transition-all duration-150">
//               ❤️ Wishlist
//             </button>
//           </div>

//           <hr className="my-6" />

//           {/* Highlights */}
//           <div className="text-sm text-gray-500 flex flex-col gap-2">
//             <p>✅ 100% Original Product</p>
//             <p>🚚 Free Delivery on orders above ₹499</p>
//             <p>↩️ Easy 7-day returns</p>
//           </div>
//         </div>
//       </div>

//       {/* Description & Reviews */}
//       <div className="mt-16">
//         <div className="flex gap-6 border-b">
//           <button className="py-3 px-6 text-sm font-medium border-b-2 border-black">
//             Description
//           </button>
//           <button className="py-3 px-6 text-sm text-gray-500 hover:text-black">
//             Reviews (121)
//           </button>
//         </div>
//         <div className="py-6 text-gray-600 text-sm leading-relaxed">
//           {productData.description} <br />
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
//           quae nam possimus!
//         </div>
//       </div>

//       {/* Related Products */}
//       <RelatedProducts
//         category={productData.category}
//         subCategory={productData.subCategory}
//       />
//     </div>
//   ) : (
//     <div className="opacity-0">Sorry Product Not Available Right Now</div>
//   );
// }

// export default Product;
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";
import { motion } from "framer-motion";

function Product() {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = () => {
    products.forEach((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]); // default to first image
      }
    });
  };

  useEffect(() => {
    fetchProductData();
    window.scrollTo({ top: 0, behavior: "smooth" }); // auto scroll to top
  }, [productId, products]);

  return productData ? (
    <div className="font-inter border-t pt-8 lg:pt-12 transition-opacity ease-in duration-500 opacity-100 px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto">
      {/* Product Section */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
        {/* Image Section */}
        <div className="flex flex-col sm:flex-row gap-4 lg:w-1/2">
          {/* Thumbnails */}
          <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-y-auto">
            {productData.image.map((item, index) => (
              <motion.img
                whileHover={{ scale: 1.05 }}
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border transition-all duration-300 ${
                  image === item ? "border-black shadow-md" : "border-gray-200"
                }`}
                alt="thumbnail"
              />
            ))}
          </div>

          {/* Main Image */}
          <motion.div
            key={image}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex-1"
          >
            <img
              className="w-full h-auto rounded-xl shadow-lg"
              src={image}
              alt="main product"
            />
          </motion.div>
        </div>

        {/* Info Section */}
        <div className="flex-1">
          <h1 className="font-semibold text-2xl sm:text-3xl lg:text-4xl mb-4 text-gray-900 leading-snug">
            {productData.name}
          </h1>

          {/* Ratings */}
          <div className="flex items-center gap-1 mb-5">
            {Array(5)
              .fill()
              .map((_, i) => (
                <img
                  key={i}
                  src={assets.star_icon}
                  alt="star"
                  className="w-4"
                />
              ))}
            <p className="pl-2 text-gray-500 text-sm sm:text-base">
              (154 reviews)
            </p>
          </div>

          {/* Price */}
          <p className="text-2xl sm:text-3xl font-bold text-black mb-6">
            {currency}
            {productData.price}
          </p>

          {/* Description */}
          <p className="text-gray-600 mb-8 text-sm sm:text-base leading-relaxed">
            {productData.description}
          </p>

          {/* Sizes */}
          <div className="mb-8">
            <p className="mb-3 font-medium text-gray-800">Select Size</p>
            <div className="flex gap-3 flex-wrap">
              {productData.sizes.map((item, index) => (
                <motion.button
                  whileTap={{ scale: 0.92 }}
                  onClick={() => setSize(item)}
                  className={`border py-2 px-5 rounded-lg text-sm sm:text-base transition-all ${
                    item === size
                      ? "bg-black text-white border-black"
                      : "bg-gray-100 border-gray-300 hover:border-black"
                  }`}
                  key={index}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 mb-10">
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.03 }}
              className="bg-black text-white px-8 py-3 rounded-lg shadow-md text-sm sm:text-base font-medium hover:bg-gray-900 transition-all duration-200"
            >
              🛒 Add to Cart
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.03 }}
              className="border px-6 py-3 rounded-lg shadow-sm text-sm sm:text-base font-medium hover:bg-gray-100 transition-all duration-200"
            >
              ❤️ Wishlist
            </motion.button>
          </div>

          <hr className="my-6" />

          {/* Highlights */}
          <div className="text-sm text-gray-600 flex flex-col gap-2">
            <p>✅ 100% Original Product</p>
            <p>🚚 Free Delivery on orders above ₹499</p>
            <p>↩️ Easy 7-day returns</p>
          </div>
        </div>
      </div>

      {/* Description & Reviews */}
      <div className="mt-16">
        <div className="flex gap-6 border-b text-sm sm:text-base">
          <button className="py-3 px-6 font-medium border-b-2 border-black">
            Description
          </button>
          <button className="py-3 px-6 text-gray-500 hover:text-black">
            Reviews (121)
          </button>
        </div>
        <div className="py-6 text-gray-600 text-sm sm:text-base leading-relaxed">
          {productData.description} <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          quae nam possimus!
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-20">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-8 text-gray-900">
        </h2>
        <RelatedProducts
          category={productData.category}
          subCategory={productData.subCategory}
        />
      </div>
    </div>
  ) : (
    <div className="opacity-0">Sorry Product Not Available Right Now</div>
  );
}

export default Product;
