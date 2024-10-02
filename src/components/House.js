import React from 'react';

import { BiBed, BiBath, BiArea } from 'react-icons/bi';



const House = ({house}) => {
  const { type, country, address, bedrooms, bathrooms, surface, price,} = house;
  return <div className='bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition'>
    <img className='mb-8' src={house.image} alt={house.id} />
    <div className='mb-4 text-sm flex gap-x-2'>
      <div className='text-violet-600  bg-violet-100 rounded-full py-5 px-4'>{type}</div>
      <div className='text-gray-600 bg-green-100 rounded-full py-5 px-4'>{country}</div>
    </div>

    <div className='text-xl font-semibold max-w-[268px]'>{address}</div>
    <div className='flex gap-x-4 my-4'>
      <div className=' text-sm flex items-center gap-x-2 font-semibold'><BiBed />{bedrooms} </div>
      <div className='text-sm flex items-center gap-x-2  font-semibold'><BiBath />{bathrooms} </div>
      <div className='text-sm flex items-center gap-x-2 font-semibold'><BiArea /> {surface} </div>
    </div>
    <div className='text-lg text-violet-600 font-semibold'>{price} dt</div>
  </div>;
};

export default House;
