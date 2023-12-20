"use client";
// -React-
import React from "react";
// -Images-
import { heroImage } from "@/utils/constants/imagesConstants";
// -Icons-
import { GoArrowDown } from "react-icons/go";
// -Components-
import HeroActions from "@/app/components/HeroActions";

const HeroTwo = () => {
  const handleArrowClick = () => {
    window.scrollTo({
      top: 950,
      behavior: 'smooth',
    });
  };

  return (
    <div className='relative w-full lg:w-[80%]'>
      <div className='h-[48rem] lg:h-[54rem] bg-cover bg-center' style={{ backgroundImage: `url(${heroImage})` }}>
        <div className='absolute inset-0 bg-black opacity-70'></div>
        <div className='absolute bottom-0 left-0'>
          <div className='relative lg:w-[13rem] lg:h-[13rem] w-[5rem] h-[5rem] grid grid-cols-2 grid-rows-2 gap-0'>
            <div className='bg-white'></div>
            <div></div>
            <div></div>
            <div className='bg-white'></div>
          </div>
        </div>
        <div className='flex flex-col text-center lg:text-start md:text-start lg:items-start md:items-start w-[90%] lg:mx-0 mx-auto lg:w-[50%] md:w-[60%] md:mx-0 relative top-[3.5rem] left[-0.2rem] lg:top-[8rem] md:top-[4rem] md:left-[4rem] lg:left-[8rem]'>
          <div className='text-white mb-[0.5rem] font-medium text-[1rem] lg:text-[1.2rem] font-subtitle'>Your trusted technical partner</div>
          <div className='text-white mb-[0.5rem] text-[3.5rem] md:text-[4rem] lg:text-[84px] font-medium leading-tight font-title'>SOLUTIONS TO POWER YOUR BUSINESS</div>

          <div className='text-white mb-[1.5rem] lg:w-[80%] text-[1.1rem] lg:text-[1.2rem] font-regular font-about'>
            We develop and plan a continuous expansion through qualified and highly motivated employees with extensive know-how. The use of innovative technologies is our daily business.
          </div>
          <HeroActions />
        </div>
          <div className="flex justify-end" onClick={handleArrowClick}>
            <div className="relative w-[6rem] h-[6rem] lg:w-[8.5rem] lg:h-[8.5rem] lg:mr-[10rem] lg:mt-[6rem] xl:mt-[8rem] md:mr-[10rem] md:mt-[20rem] mr-[3rem] mt-[12rem]">
              <div className="w-[6rem] h-[6rem] lg:w-[9rem] lg:h-[9rem] flex items-center justify-center overflow-hidden rounded-full border border-white group transition duration-200 hover:border-black hover:bg-white hover:border-0 hover:scale-[90%]">
                <div className="absolute w-full h-full bg-white opacity-0 rounded-full transition duration-300"></div>
                <GoArrowDown
                  size={40}
                  color='white'
                  className="transition-transform duration-200 ease-in-out group-hover:fill-black lg:w-[60px] lg:h-[60px]"
                />
              </div>
            </div>
          </div>    
        </div>
    </div>
  );
};

export default HeroTwo;