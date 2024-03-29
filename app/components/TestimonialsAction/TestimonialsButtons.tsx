"use client";
// -React-
import React from "react";
// -Next-
import dynamic from "next/dynamic";
// -Icons-
import { MdOutlineArrowForward } from "react-icons/md";
// -Button component-
const Button = dynamic(() => import("@/app/components/Button/Button"));

const TestimonialsButtons = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center lg:flex-row mt-[1rem] md:mt-0 w-full lg:justify-center">
        <Button 
          className='relative bg-yellow-500 text-white font-medium lg:py-[1.5rem] py-[1rem] lg:px-[2.5rem] px-[5rem] md:px-[12rem] whitespace-nowrap rounded-[3rem] group overflow-hidden z-[1] lg:mb-0 mb-[1rem]'
          iconClassName='ml-[10px] group-hover:text-black'
          title='Get a quote'
          titleClassName="group-hover:text-black"
          Icon={MdOutlineArrowForward}
          href='/quote'
        >
          <div className="absolute inset-0 bg-black w-full transform origin-right transition-transform duration-300 group-hover:scale-x-0 z-[-1]"></div>
        </Button>
        <Button
          className="relative bg-yellow-500 text-black border-[1px] border-black font-medium lg:py-[1.5rem] py-[1rem] lg:px-[2rem] px-[6rem] md:px-[13rem] rounded-[3rem] group overflow-hidden z-[1] lg:ml-[20px] hover:border-opacity-0 hover:border-transparent"
          iconClassName=""
          title="Contact Us"
          titleClassName="group-hover:text-white"
          href="/contact"
        >
          <div className="absolute inset-0 bg-neutral-100 w-full transform origin-right transition-transform duration-300 group-hover:scale-x-0 z-[-1]"></div>
        </Button>
      </div>
    </div>
  );
};

export default TestimonialsButtons;