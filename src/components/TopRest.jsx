import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import Card from './Card';
import topRestaurants from '../data/top_restaurants'; // ✅ IMPORT LOCAL DATA

const TopRest = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Instead of fetching from API, directly set local data
    setData(topRestaurants);
  }, []);

  return (
    <div className='max-w-[1200px] mx-auto'>
      <div className='flex my-3 items-center justify-between'>
        <div className='text-[25px] font-bold'>Top Restaurant Chains in Faridabad</div>
        <div className='flex'>
          <div className='cursor-pointer flex items-center justify-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'>
            <FaArrowLeft />
          </div>
          <div className='cursor-pointer flex items-center justify-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'>
            <FaArrowRight />
          </div>
        </div>
      </div>

      <div className='flex gap-3 overflow-hidden flex-wrap'>
        {data.map((d, i) => (
          <Card key={i} {...d} />
        ))}
      </div>
    </div>
  );
};

export default TopRest;
