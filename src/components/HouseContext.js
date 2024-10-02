import React, { useState, createContext, useEffect } from 'react';


// import data 

import { housesData } from '../data';


export const HouseContext = createContext();
const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Property type (any)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price range (any)');
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });

    const uniqueCountries = ['Location (any)', ...new Set(allCountries)];
    setCountries(uniqueCountries);

  }, [houses]);


  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });

    const uniqueProperties = ['Type (any)', ...new Set(allProperties)];
    setProperties(uniqueProperties);
  }, [houses]);

  const handleClick = () => {
    
    const isDefault = (str) => {
      return str.split(' ').includes('(any)');
    };

    const minPrice = parseInt(price.split(' ')[0]);
    const maxPrice = parseInt(price.split(' ')[2]);

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);
      
      // Check if all filters are set to default
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return true;
      }

      // Apply filters
      const countryMatch = isDefault(country) || house.country === country;
      const propertyMatch = isDefault(property) || house.type === property;
      const priceMatch = isDefault(price) || (housePrice >= minPrice && housePrice <= maxPrice);

      return countryMatch && propertyMatch && priceMatch;
    });
    console.log(newHouses);

    setLoading(true);
    setTimeout(() => {
      setHouses(newHouses.length < 1 ? [] : newHouses);
      setLoading(false);
    }, 1000);

  }









return (
  <HouseContext.Provider value={{
    houses,
    setHouses,
    country,
    setCountry,
    countries,
    setCountries,
    property,
    setProperty,
    properties,
    setProperties,
    price,
    setPrice,
    loading,
    setLoading,
    handleClick,
    
  }}>{children}</HouseContext.Provider>
);
};

export default HouseContextProvider;
