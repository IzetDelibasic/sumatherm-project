import React from 'react';
import { aboutUsImage } from '@/utils/constants/imagesConstants';
import Link from 'next/link';
import Button from '@/app/components/Button'

const AboutUs = () => {
  return (
    <div 
      data-aos="fade-up"
      data-aos-duration="500" 
      data-aos-once="true" 
      data-aos-delay="200"
      className='py-[4rem] lg:py-[12rem]' id='aboutSection'>
      <div className='flex flex-col lg:w-[40%] w-[90%] lg:mx-auto lg:items-center mx-auto'>
        <div className='text-center'>
          <div className='mb-[0.5rem] lg:mb-[1rem] font-medium'>ABOUT US</div>
          <div className='mb-[1rem] lg:mb-[2rem] text-[2rem] lg:text-[4.5rem] lg:leading-none leading-tight font-medium font-title'>Our employees are our potential!</div>
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
      <div className='flex lg:flex-row flex-col w-[90%] lg:w-[90%] items-center justify-center mx-auto lg:mx-0'>
        <div className='w-[90%] lg:w-[60%] flex flex-col justify-center items-center my-8 lg:my-16 text-center lg:text-start'>
          <div className='w-full lg:w-[50%] lg:mb-0 text-black font-medium font-about mb-[1.5rem]'>The name Sumatherm GmbH stands for a family-run company with an extensive customer-oriented range of services based on partnership.
          It is important to us that you are satisfied with our work. For this we offer you quality, reliability and a fair partnership.</div>
          <div className='w-full lg:w-[50%] text-black font-medium font-about'>We offer practical and tailor-made solutions from a single source and are happy to cater to the specific wishes of our clients. I.e. from finding the system, including a profitability study, to planning and execution.</div>
        </div>
        <Link href="#contactSection">
          <Button
            className="relative lg:w-[15rem] w-[15rem] md:w-[30rem] lg:h-[10%] bg-red-600 text-black border-[1px] border-black font-medium lg:py-[1.5rem] py-[1rem] rounded-[3rem] group overflow-hidden z-[1] hover:border-opacity-0 hover:border-transparent"
            iconClassName=""
            title="Contact Us"
            titleClassName="group-hover:text-white"
            href="/contact"
            >
            <div className="absolute inset-0 bg-neutral-100 w-full transform origin-right transition-transform duration-300 group-hover:scale-x-0 z-[-1]"></div>
          </Button>
        </Link>
      </div>
      {/* <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 w-[90%] lg:w-[60%] mx-auto'>
        {aboutUsConstant.map((service, index) => (
          <div key={index} className='text-center'>
            <div className='text-[2.2rem] lg:text-[5rem] font-medium'>{service.number}</div>
            <div className='text-[1rem] lg:text-[1.5rem] font-medium text-gray-500'>{service.text}</div>
          </div>
        ))}
      </div> */}
      <div className='border-b-2 border-gray-300 pt-[2.5rem] w-[90%] lg:w-[60%] mx-auto'></div>
    </div>
  );
};

export default AboutUs;
