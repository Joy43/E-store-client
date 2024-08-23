import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Sample products data
const products = [
  { id: 1, name: 'Vaccine', price: '$340', imageUrl: 'https://i.postimg.cc/fR4gJhjy/pexels-n-voitkevich-586340.jpg' },
  { id: 2, name: 'M90 mask', price: '$340', imageUrl: 'https://i.postimg.cc/k45TkM91/pexels-charlotte-may-596583.jpg' },
  { id: 3, name: 'Rosova tablet', price: '$340', imageUrl: 'https://i.postimg.cc/7LwsnMRy/pexels-karolina-grabowska-404700.jpg' },
  { id: 4, name: 'Daynograph', price: '$340', imageUrl: 'https://i.postimg.cc/LXn8hf2z/pexels-karolina-grabowska-4386467.jpg' },
  { id: 5, name: 'Gym Shoes', price: '$340', imageUrl: 'https://i.postimg.cc/fR4gJhjy/pexels-n-voitkevich-586340.jpg' },
  { id: 6, name: 'Hand wash', price: '$340', imageUrl: 'https://i.postimg.cc/y6jrd03J/images.jpg' },
];

function LatestProduct() {
  const [hover, setHover] = useState(false);

  return (
    <div className='bg-[#F6F5F2] m-6 text-[#002540] p-6 rounded-lg mx-auto max-w-screen-lg'>
      <h1 className='font-serif text-2xl text-[#1351D8] mb-4 text-center sm:text-left'>
        Our Latest Products
      </h1>
      <hr className='bg-[#1351D8] m-3 w-56 mx-auto sm:mx-0' />

      <motion.div
        className='bg-[#FCFDFF] shadow-lg rounded-lg transition-all duration-500 hover:shadow-2xl p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* ----------Popular Card--------- */}
        <motion.div
          className='flex flex-col items-center shadow-2xl shadow-[#1351D8] p-4 bg-[#F6F5F2] rounded-lg'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <button className='bg-[#1351D8] text-white px-4 py-2 rounded-full mb-4'>
            100% PureHand
          </button>

          <h1 className='mt-4 text-lg font-bold text-[#002540]'>
            Amandean Wild Caught
          </h1>

          <div className='mt-4 flex flex-col items-center'>
            <div className='relative flex items-center justify-center'>
              <div className='bg-[#1351D8] rounded-full w-40 h-40 animate-pulse'></div>
              <div className='absolute'>
                <p className='text-lg text-[#FCFDFF]'>Discount</p>
                <h1 className='text-4xl font-bold text-[#FFFFFF]'>50%</h1>
              </div>
            </div>

            <motion.div
              className={`relative mt-4 w-fit h-64 rounded-lg overflow-hidden transition-all duration-500 ${hover ? 'bg-[#F60301]' : 'bg-[#1351D8]'}`}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <img
                src="https://i.ibb.co/h295jrn/james-mckinven-tpu-Ao8g-Vs58-unsplash.jpg"
                alt='microscope'
                className='w-full h-full object-cover transition-opacity duration-500 hover:opacity-90'
              />
            </motion.div>
          </div>
        </motion.div>

        {/* -----------Product Cards--------- */}
        <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-10'>
  {products.map((product) => (
    <motion.div
      key={product.id}
      className='relative w-full sm:w-64 lg:w-40 h-auto bg-[#FFFFFF] shadow-md rounded-3xl p-4'
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Link to="/product">
      <div className='overflow-hidden rounded-2xl'>
        <img
          className='rounded-2xl w-full h-40 object-cover'
          src={product.imageUrl}
          alt={product.name}
        />
        <p className='absolute right-2 top-2 bg-[#FCFDFF] rounded-full p-2 cursor-pointer group'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 group-hover:opacity-50 opacity-70'
            fill='none'
            viewBox='0 0 24 24'
            stroke='black'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={1.5}
              d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
            />
          </svg>
        </p>
      </div>
      <div className='mt-4 flex justify-between items-center'>
        <div>
          <p className='text-lg font-semibold text-[#002540]'>{product.name}</p>
          <p className='text-md text-gray-800'>{product.price}</p>
        </div>
      </div>
      
      </Link>
    </motion.div>
  ))}
</div>


      </motion.div>
    </div>
  );
}

export default LatestProduct;
