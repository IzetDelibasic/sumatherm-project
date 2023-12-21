"use client";
// -React-
import React from "react";
// -Next-
import dynamic from "next/dynamic";
// -Icons-
import { MdOutlineArrowForward } from "react-icons/md";
const Button = dynamic(() => import("@/app/components/Button"));

const HeroButtons = () => {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row md:justify-start md:w-[30rem] lg:w-[40rem] w-[90%] mx-auto md:mx-0">
      <Button
        className="relative bg-red-600 text-white font-medium lg:py-[1.6rem] py-[1rem] lg:px-[2.5rem] px-[4rem] md:px-[1rem] mr-0 mb-[20px] md:mb-0  rounded-[3rem] group overflow-hidden z-[1]"
        iconClassName="ml-[10px] group-hover:text-black"
        title="Request a quote"
        titleClassName="group-hover:text-black font-subtitle"
        Icon={MdOutlineArrowForward}
        href="/quote"
      >
        <div className="absolute inset-0 bg-blue-950 w-full transform origin-right transition-transform duration-300 group-hover:scale-x-0 z-[-1]"></div>
      </Button>
      <Button
        className="relative bg-red-600 text-black border-[1px] border-black font-medium lg:py-[1.6rem] py-[1rem] lg:px-[2rem] px-[5rem] md:px-[1rem] rounded-[3rem] group overflow-hidden z-[1] md:ml-[20px] hover:border-opacity-0 hover:border-transparent"
        iconClassName=""
        title="Apply to work"
        titleClassName="group-hover:text-white font-subtitle"
        href="contacts"
      >
        <div className="absolute inset-0 bg-neutral-100 w-full transform origin-right transition-transform duration-300 group-hover:scale-x-0 z-[-1]"></div>
      </Button>
    </div>
  );
};

export default HeroButtons;