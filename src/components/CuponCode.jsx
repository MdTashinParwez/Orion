// import React from 'react'

// function CuponCode() {
//   return (
//     <div className='text-center'>
//         <p className="text-2xl font-medium text-gray-800">Lorem ipsum dolor sit.</p>
//     <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet consectetur.
//     </p>

//     <form className='w-full sm:w-1/2 flex items-center gap-3 max-auto my-6 border pl-3'>
//         <input className='w-full sm:flex-1 outline-none' type="epsum" placeholder='lorem' />
//         <button type='submit' className='bg-black text-white text-xs px-10 py-4' >sdfds</button>
//     </form>
//     </div>
//   )
// }

// export default CuponCode

import React from 'react'


function CouponCode() {
  const onSubmitHandler=(event) =>{
  event.preventDefault();}
  return (
    <div className='text-center py-12 px-4'>
      {/* Heading */}
      <p className="text-2xl font-semibold text-gray-800">Get 10% Off Your First Order</p>

      {/* Subtext */}
      <p className='text-g ray-500 mt-3'>
        Sign up now and receive a welcome discount straight to your inbox!
      </p>

      {/* Form */}
      <form  onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-gray-300 rounded overflow-hidden'>
        <input
          className='w-full px-4 py-3 outline-none text-sm text-gray-700'
          type="email"
          placeholder='Enter your email address'
        />
        <button
          type='submit'
          className='bg-black text-white text-sm font-medium px-6 py-3 hover:bg-gray-800 transition'
        >
          Get Code
        </button>
      </form>
    </div>
  )
}

export default CouponCode
