import React, { useRef, useState, useEffect } from 'react';
import Card from './Card';
import topRestaurants from '../data/top_restaurants'; 

const OnlineDelivery = () => {
  const [data, setData] = useState(topRestaurants); 
  const componentRef = useRef(null);
  const [isAtTop, setIsAtTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (componentRef.current) {
        const rect = componentRef.current.getBoundingClientRect();
        setIsAtTop(rect.top <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='max-w-[1200px] mx-auto'>
      <div className='flex my-3 items-center justify-between'>
        <div className='text-[25px] font-bold'>
          Restaurant With Online Food Delivery in Faridabad
        </div>
      </div>

      <div
        ref={componentRef}
        className={`transition-all duration-300 ${
          isAtTop ? 'sticky top-0 w-full bg-white shadow-lg z-[99999]' : ''
        }`}
      >
        <div className='max-w-[1200px] mx-auto flex my-4 gap-3 px-4 h-[85px] items-center '>
          <div className='p-3 rounded-md shadow bg-white'>Filter</div>
          <div className='p-3 rounded-md shadow bg-white'>Sort By</div>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4'>
        {data.map((d, i) => (
          <Card key={i} {...d} />
        ))}
      </div>
    </div>
  );
};

export default OnlineDelivery;
