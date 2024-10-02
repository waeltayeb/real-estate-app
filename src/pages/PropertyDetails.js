import React from 'react';
import { useParams } from 'react-router-dom';
import { housesData } from '../data';

import { BiBed, BiBath, BiArea } from 'react-icons/bi';
import { MdOutlinePhone } from "react-icons/md";




const PropertyDetails = () => {
  const { id } = useParams();
  const house = housesData.find(house => house.id === parseInt(id));


  return <section>
    <div className='container mx-auto min-h-[800px] mb-14'>
      <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
        <div>
          <h2 className='text-2xl font-semibold mb-4'>{house.name}</h2>
          <h3 className='text-lg text-gray-600 mb-4'>{house.address}</h3>
        </div>
        <div className='mb-4 lg:mb-0 flex gap-x-2 items-center'>
          <div className='bg-green-500 text-white rounded-full px-3 py-1'>{house.type}</div>
          <div className='bg-blue-500 text-white rounded-full px-3 py-1'>{house.country}</div>
        </div>
        <div className='text-3xl text-violet-600 font-semibold'>
          $ {house.price}
        </div>
      </div>
      <div className='flex flex-col items-start gap-8 lg:flex-row'>
        <div className='max-w-[768px] mx-auto lg:mx-0'>
          <div className='mb-8'>
            <img src={house.imageLg} alt="" className='mb-8' />
            <div className='flex gap-x-6 text-violet-700 mb-6'>
              <div className='flex items-center gap-x-2'>
                <BiBed className='text-2xl' />
                <div className='text-lg font-medium'>{house.bedrooms}</div>
              </div>
              <div className='flex items-center gap-x-2'>
                <BiBath className='text-2xl' />
                <div className='text-lg font-medium'>{house.bathrooms}</div>
              </div>
              <div className='flex items-center gap-x-2'>
                <BiArea className='text-2xl' />
                <div className='text-lg font-medium'>{house.surface}</div>
              </div>
            </div>
            <div className='mt-6'>{house.description}</div>
          </div>
        </div>
        <div className='flex-1 w-full mb-8 bg-white border border-gray-300 rounded-lg px-6 py-8'>
          <div className='flex items-center gap-x-4 mb-8'>
            <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
              <img src={house.agent.image} alt="" />
            </div>
            <div>
              <div className='font-bold text-lg'>{house.agent.name}</div>
              <h6 to='' className='text-violet-700 text-sm'> <MdOutlinePhone className='inline-block mr-2' /> {house.agent.phone}</h6>
            </div>
          </div>
          <form className='flex flex-col gap-y-4'>
            <input 
              className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm'
              type='text'
              placeholder='Name*'
            />
            <input 
              className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm'
              type='text'
              placeholder='Email*'
            />
            <input 
              className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm'
              type='text'
              placeholder='Phone*'
            />
            <textarea 
              className='border border-gray-300 focus:border-violet-700 outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-400'
              placeholder='Message*'
              defaultValue='Hello, I am interested in [Modern apartment]'
            ></textarea>
            <div className='flex gap-x-2'>
              <button 
                className='bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition'
                type='submit'
              >
                Send message
              </button>
              <p className='border border-violet-700 text-violet-700 hover:border-violet-500 hover:text-violet-500 rounded p-4 text-sm w-full transition'>
                Call Number : {house.agent.phone}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>;
};

export default PropertyDetails;
