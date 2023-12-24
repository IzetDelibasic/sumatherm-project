// -React- 
import React from 'react';
// -Constants-
import { toolWorkerImage } from '@/utils/constants/imagesConstants';

const Testimonials = () => {
  return (
    <div 
      data-aos="fade-up"
      data-aos-duration="500" 
      data-aos-once="true" 
      data-aos-delay="200"
      className="lg:h-[40rem] h-[30rem] flex flex-col relative text-center lg:text-start bg-cover" style={{ backgroundImage: `url(${toolWorkerImage})` }}
    >
      <div className=" my-auto">
        <div className='absolute lg:w-[10rem] lg:h-[10rem] w-[5rem] h-[5rem] grid grid-cols-2 grid-rows-2 gap-0 top-0 right-0 z-10'>
          <div></div>
          <div className='bg-white'></div>
          <div className='bg-white'></div>
          <div></div>
        </div>
        <div 
        data-aos="fade-down"
        data-aos-duration="700" 
        data-aos-once="true" 
        data-aos-delay="400"
        className='relative text-white text-center font-title text-[2rem] lg:text-[3rem] lg:w-[65%] w-[85%] mx-auto z-10'>
          We develop and produce standard products and individual complete solutions for leading companies from all over the world.</div>
        <div className='absolute inset-0 bg-black opacity-70 z-0'></div>
      </div>
    </div>
  );
}

export default Testimonials;
