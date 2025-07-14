// import React, { useContext } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import { assets } from '../assets/assets';

// function SearchBar() {
//   const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);

//   if (!showSearch) return null;

//   return (
//     <div className='relative border-t border-b bg-gray-50 text-center z-50'>
//       <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-3 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
//         <input
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className='flex-grow outline-none bg-inherit text-sm px-2'
//           type="text"
//           placeholder="Search for products..."
//         />
//         <img className='w-4 h-4 ml-2' src={assets.search_icon} alt="Search" />
//       </div>
//       <img
//         src={assets.cross_icon}
//         alt="Close"
//         className='w-6 h-6 cursor-pointer absolute right-5 top-5'
//         onClick={() => setShowSearch(false)}
//       />
//     </div>
//   );
// }

// export default SearchBar;
import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

function SearchBar() {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);

  if (!showSearch) return null;

  return (
    <div className="fixed top-23 left-1/2 transform -translate-x-1/2 z-50 w-[90%] sm:w-[70%] md:w-[50%]">
      <div className="flex items-center bg-white border border-gray-300 rounded-full px-5 py-3 shadow-lg">
        <img src={assets.search_icon} alt="Search" className="w-4 h-4 opacity-60" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="flex-grow ml-3 bg-transparent outline-none text-sm text-gray-700"
        />
        <img
          src={assets.cross_icon}
          alt="Close"
          className="w-5 h-5 cursor-pointer ml-3 opacity-70 hover:scale-110 transition"
          onClick={() => setShowSearch(false)}
        />
      </div>
    </div>
  );
}

export default SearchBar;
