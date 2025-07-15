import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import categoryData from '../data/category'; // ✅ default import

const Category = () => {
  const [slide, setSlide] = useState(0);
  const [categories, setCategory] = useState([]);

  useEffect(() => {
    setCategory(categoryData); // ✅ directly set local data
  }, []);

  const nextSlide = () => {
    if (slide >= categories.length - 8) return;
    setSlide(slide + 3);
  };

  const prevSlide = () => {
    if (slide <= 0) return;
    setSlide(slide - 3);
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex my-3 items-center justify-between">
        <div className="text-[25px] font-bold">What's on your mind?</div>
        <div className="flex">
          <div className="cursor-pointer w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex items-center justify-center" onClick={prevSlide}>
            <FaArrowLeft />
          </div>
          <div className="cursor-pointer w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex items-center justify-center" onClick={nextSlide}>
            <FaArrowRight />
          </div>
        </div>
      </div>

      <div className="flex overflow-hidden gap-3">
        {categories.map((cat, index) => (
          <div key={index} style={{ transform: `translateX(-${slide * 100}%)` }} className="shrink-0 group">
            <img
              src={`/images/${cat.image}`} // use `/public/images/`
              alt={`category-${index}`}
              className="w-[150px] group-hover:scale-110 duration-100 rounded-lg"
            />
          </div>
        ))}
      </div>

      <hr className="my-6 border" />
    </div>
  );
};

export default Category;
