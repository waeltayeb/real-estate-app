import React, { useState, useContext} from 'react';

import {RiHome5Line, RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri';

import { Menu } from '@headlessui/react';

import { HouseContext } from './HouseContext';


const PropertyDropdown = () => {
  const { property, setProperty, properties, } = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);

  return <Menu as='div' className='dropdown relative w-full'>
    <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
      <RiHome5Line className='dropdown-icon-primary' />
      <div className='flex justify-center items-center space-x-2'>
        <div className='text-[15px] font-medium leading-tight'>{property}</div>
        <div className='text-[13px]'>Select your type</div>
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
        {properties.map((property, index) => {
          return (
            <Menu.Item
            
            onClick={() => {
              setProperty(property);
              setIsOpen(false);
            }}
            
            className='cursor-pointer hover:text-violet-700 transition' as='li' key={index}>
              {property}
            </Menu.Item>
          );
        })}
        </Menu.Items>
  </Menu>;
};


export default PropertyDropdown;
