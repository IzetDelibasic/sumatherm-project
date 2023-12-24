'use client'
// -React-
import React from 'react'
// -Next-
import dynamic from 'next/dynamic';

const Button = dynamic(() => import("@/app/components/Button/Button"));

const SubscribeButton = () => {
  return (
        <div className='flex items-center justify-center w-full md:w-[25rem] md:mx-auto lg:mx-0'>
          <Button
              className="relative bg-red-600 text-white font-medium lg:py-[1rem] py-[1rem] lg:px-[2rem] px-[5rem] md:px-[1rem] rounded-[3rem] group overflow-hidden z-[1] md:ml-[20px] hover:border-opacity-0 hover:border-transparent"
              iconClassName=""
              title="Subscribe"
              titleClassName="group-hover:text-white font-subtitle"
            >
              <div className="absolute inset-0 bg-black w-full transform origin-right transition-transform duration-300 group-hover:scale-x-0 z-[-1]"></div>
            </Button>
        </div>
  )
}

export default SubscribeButton;