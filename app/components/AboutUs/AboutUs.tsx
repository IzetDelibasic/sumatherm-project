import React from 'react';
import { aboutUsImage } from '@/utils/constants/imagesConstants';
import { aboutUsConstant } from '@/utils/constants/aboutConstant';

const AboutUs = () => {
  return (
    <div 
      data-aos="fade-up"
      data-aos-duration="500" 
      data-aos-once="true" 
      data-aos-delay="200"
      className='py-[4rem] lg:py-[12rem]'>
      <div className='flex flex-col lg:w-[40%] w-[90%] lg:mx-auto lg:items-center mx-auto'>
        <div className='text-center'>
          <div className='mb-[0.5rem] lg:mb-[1rem] font-medium'>ABOUT US</div>
          <div className='mb-[1rem] lg:mb-[2rem] text-[2rem] lg:text-[3.5rem] lg:leading-none leading-tight font-medium'>A team of reliable and experienced contractors</div>
        </div>
      </div>
      <div className='w-[90%] lg:w-[60%] h-[10rem] lg:h-[24rem] bg-cover bg-center mx-auto relative' style={{ backgroundImage: `url(${aboutUsImage})` }}>
        <div className='relative w-[5rem] h-[5rem] lg:w-[15rem] lg:h-[15rem] grid grid-cols-2 grid-rows-2 gap-0'>
          <div className='bg-white'></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className='absolute w-[5rem] h-[5rem] lg:w-[15rem] lg:h-[15rem] grid grid-cols-2 grid-rows-2 gap-0 right-0 bottom-0'>
          <div></div>
          <div></div>
          <div></div>
          <div className='bg-white'></div>
        </div>
      </div>
      <div className='w-[90%] lg:w-[60%] flex flex-col lg:flex-row justify-center items-center mx-auto my-8 lg:my-16 text-center lg:text-start'>
        <div className='w-full lg:w-[50%] mb-[1rem] lg:mb-0 text-gray-500 font-medium'>Lorem ipsum dolor sit amet consectetur vel risus interdum bibendum fringilla massa pellentesque pellentesque elit sed nisi tristique a diam rutrum sodales senectus tellus in vivamus nunc iaculis morbi.</div>
        <div className='w-full lg:w-[50%] text-gray-500 font-medium'>Lorem ipsum dolor sit amet consectetur vel risus interdum bibendum fringilla massa pellentesque pellentesque elit sed nisi tristique a diam rutrum sodales senectus tellus in vivamus nunc iaculis morbi.</div>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 w-[90%] lg:w-[60%] mx-auto'>
        {aboutUsConstant.map((service, index) => (
          <div key={index} className='text-center'>
            <div className='text-[2.2rem] lg:text-[5rem] font-medium'>{service.number}</div>
            <div className='text-[1rem] lg:text-[1.5rem] font-medium text-gray-500'>{service.text}</div>
          </div>
        ))}
      </div>
      <div className='border-b-2 border-gray-300 pt-[2.5rem] w-[90%] lg:w-[60%] mx-auto'></div>
    </div>
  );
};

export default AboutUs;
