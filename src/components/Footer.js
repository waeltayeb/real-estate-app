import React from 'react';
import Logo from '../assets/img/logo.svg';

const Footer = () => {
  return <footer className='bg-black py-12 lg:flex lg:justify-center text-white'>
    <div className='space-y-6 px-4 md:px-0 max-w-[1170px] mx-auto'>
      <div className='flex flex-col items-start gap-6 lg:items-center'>
        <img src={Logo} alt='' className='w-32 md:w-40 bg-slate-200 rounded-full p-2' />
        <p className='text-gray-300 text-sm max-w-md text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full max-w-md'>
          <input 
            type='text' 
            placeholder='Enter your email' 
            className='text-black px-4 py-3 rounded-full focus:outline-none w-full sm:w-2/3'
          />
          <button className='bg-violet-700 hover:bg-violet-800 transition text-white px-6 py-3 rounded-full w-full sm:w-auto'>
            Subscribe
          </button>
        </div>
      </div>
      <div className='flex flex-col items-start gap-6 lg:items-center'>
        <div className='text-gray-300 text-sm'>Copyright &copy; 2024 All rights reserved | This template is made with by <span className='text-violet-700'>Taieb Wael</span></div>
      </div>
    </div>
      

  </footer>;
};

export default Footer;
