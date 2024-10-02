import React, { useState, useContext} from 'react';

import {RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri';

import { Menu } from '@headlessui/react';

import { HouseContext } from './HouseContext';

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    {
      value: 'Price (any)',
    },
    {
      value: '100000 - 130000',
    },
    {
      value: '130000 - 160000',
    },
    {
      value: '160000 - 190000',
    },
    {
      value: '190000 - 220000',
    },
    {
      value: '220000 - 250000',
    },
    {
      value: '250000 - 280000',
    },
    {
      value: '280000 - 310000',
    },
  ]

  return <Menu as='div' className='dropdown relative w-full'>
    <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
      <RiWallet3Line className='dropdown-icon-primary' />
      <div className='flex justify-center items-center space-x-2'>
        <div className='text-[15px] font-medium leading-tight'>{price}</div>
        <div className='text-[13px]'>Choose Price Range</div>
        {
          isOpen ? (
            <RiArrowUpSLine className='dropdown-icon-secondary' />
          ) : (
            <RiArrowDownSLine className='dropdown-icon-secondary' />
          )
        }

        </div>
      </Menu.Button>
      <Menu.Items className='dropdown-menu'>
        {prices.map((price, index) => {
          return (
            <Menu.Item
            
            onClick={() => {
              setPrice(price.value);
              setIsOpen(false);
            }}
            
            className='cursor-pointer hover:text-violet-700 transition' as='li' key={index}>
              {price.value}
            </Menu.Item>
          );
        })}
        </Menu.Items>
  </Menu>;
};

export default PriceRangeDropdown;
