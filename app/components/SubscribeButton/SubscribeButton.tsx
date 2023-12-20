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
              className="relative bg-red-600 text-white border-[1px] border-black font-medium lg:py-[1rem] py-[1rem] lg:px-[2rem] px-[5rem] md:px-[12rem] rounded-[3rem] group overflow-hidden z-[1] hover:border-opacity-0 hover:border-transparent mb-[1rem] lg:mb-0"
              iconClassName=""
              title='Subscribe'
              titleClassName="group-hover:text-white"
              href='/subscribe'
              
            >
              <div className="absolute inset-0 bg-black w-full transform origin-right transition-transform duration-300 group-hover:scale-x-0 z-[-1]"></div>
            </Button>
        </div>
  )
}

export default SubscribeButton;