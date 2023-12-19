import React from "react";
import Image from "next/image";
import { machineImage } from "@/utils/constants/imagesConstants";
import SubscribeButton from "@/app/components/SubscribeButton/SubscribeButton";

const ContactUs = () => {
  return (
    <div 
    data-aos="fade-right"
    data-aos-duration="500" 
    data-aos-once="true" 
    data-aos-delay="200"
    className='lg:w-[80%] bg-hyellow-100 lg:h-[40rem] md:h-[55rem] h-[45rem] relative overflow-hidden'>
      <div className='absolute bottom-0 w-full lg:w-[50%] h-[50%] lg:h-[70%] md:h-[50%]' style={{ maxWidth: '100%' }}>
        <Image src={machineImage} alt='Raid Truck' layout='fill' objectFit='cover' />
      </div>
      <div className='absolute lg:w-[18rem] lg:h-[12rem] w-[9rem] h-[6rem] grid grid-cols-3 grid-rows-2 gap-0 left-0 top-0'>
        <div></div>
        <div></div>
        <div className='bg-white'></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className='absolute lg:w-[18rem] lg:h-[12rem] w-[9rem] h-[6rem] grid grid-cols-3 grid-rows-2 gap-0 left-0 bottom-0'>
        <div></div>
        <div className='bg-white'></div>
        <div></div>
        <div className='bg-white'></div>
        <div></div>
        <div className='bg-white'></div>
      </div>
      <div className='lg:flex flex-col lg:w-[40%] lg:absolute lg:top-[1rem] lg:right-[3rem] py-[5rem] mx-auto w-[90%] text-center lg:text-start'>
        <div className='mb-[0.5rem] font-medium'>GET IN TOUCH</div>
        <div className='mb-[0.5rem] text-[32px] lg:text-[58px] font-medium'>Get in touch with us</div>
        <div className='mb-[1.5rem] lg:text-[17px] font-medium lg:w-[95%]'>Lorem ipsum dolor sit amet consectetur senectus velit faucibus non quisque at ut vitae platea justo nec mattis adipiscing donec tellus id.</div>
        <form className='flex flex-col lg:w-[99%] w-full lg:flex-row lg:justify-between lg:items-end'>
          <div className='lg:relative lg:mb-2 mx-auto lg:mx-0 flex justify-center items-center'>
            <div className='relative'>
              <input
                type='email'
                placeholder='Enter your email'
                className='py-2 w-full focus:outline-none appearance-none bg-transparent border-none text-center'
                required
              />
            </div>
          </div>
          <div className={'border-b-2 border-black w-[70%] mx-auto py-1 lg:hidden mb-[1rem]'}></div>
          <SubscribeButton />
        </form>
        <div className={'lg:border-b-[1px] lg:border-neutral-400 lg:py-1 lg:w-[77%] lg:block hidden'}></div>
      </div>
    </div>
  );
};

export default ContactUs;