"use client";
// -React-
import React from "react";
// -Next-
import dynamic from "next/dynamic";
// -Icons-
import { MdOutlineArrowForward } from "react-icons/md";
// -Button component-
const Button = dynamic(() => import("@/app/components/Button/Button"));

const ArrowButton = () => {
  return (
    <Button 
      className='relative bg-yellow-500 text-white font-semibold lg:py-[1.5rem] py-[1rem] lg:px-[2.5rem] px-[4.5rem] md:px-[11rem] whitespace-nowrap rounded-[3rem] group overflow-hidden z-[1]'
      iconClassName='ml-[10px] group-hover:text-black'
      title='Get a quote'
      titleClassName="group-hover:text-black"
      Icon={MdOutlineArrowForward}
      href='/quote'
    >
      <div className="absolute inset-0 bg-black w-full transform origin-right transition-transform duration-300 group-hover:scale-x-0 z-[-1]"></div>
    </Button>

  )
}

export default ArrowButton