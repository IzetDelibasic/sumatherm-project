"use client";
// -React-
import React from "react";
// -Next-
import dynamic from "next/dynamic";
// -Icons-
import { MdOutlineArrowForward } from "react-icons/md";
// -Button component-
const Button = dynamic(() => import("@/app/components/Button/Button"));

const ServicesButtons = () => {
  return (
    <div className="lg:flex flex-col sm:flex-row lg:justify-center items-center mt-8">
      <Button
        className="bg-black text-white font-semibold lg:py-[1.5rem] py-[1rem] lg:px-[2.5rem] px-[6rem] rounded-[3rem] whitespace-nowrap mb-4 sm:mb-0 sm:mr-[1.5rem] transition duration-300 ease-in-out transform hover:bg-neutral-700 hover:scale-[97%]"
        iconClassName="ml-[10px]"
        title="Get a quote"
        Icon={MdOutlineArrowForward}
        href="/quote"
      />
      <Button
        className="text-black border-[1px] border-black font-medium lg:py-[1.5rem] py-[1rem] lg:px-[3.5rem] px-[5rem] rounded-[3rem] whitespace-nowrap transition duration-300 ease-in-out transform hover:scale-[99%] hover:bg-black hover:border-0 hover:text-white"
        iconClassName=""
        title="Browse all services"
        href="/services"
      />
    </div>
  );
};

export default ServicesButtons;
