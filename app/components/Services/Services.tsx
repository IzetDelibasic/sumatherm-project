// -React-
import React from "react";
// -Constants-
import { servicesLinks } from "@/utils/constants/servicesLinks";
// -Icons-
import { MdArrowOutward } from "react-icons/md";
// -Next-
import Image from "next/image";

const Services = () => {
  return (
    <div 
    data-aos="fade-up"
    data-aos-duration="400" 
    data-aos-once="true" 
    className="bg-hgray-50 relative flex flex-col justify-center items-center py-[8rem] lg:py-[12rem]" id='companiesSection'>
      <div className="absolute lg:w-[13rem] lg:h-[13rem] w-[5rem] h-[5rem] top-0 right-0 grid grid-cols-2 grid-rows-2 gap-0">
        <div className="bg-white"></div>
        <div className="bg-white"></div>
        <div></div>
        <div className="bg-white"></div>
      </div>
      <div className="absolute bottom-0 left-0 lg:w-[13rem] lg:h-[13rem] w-[5rem] h-[5rem] grid grid-cols-2 grid-rows-2 gap-0">
        <div></div>
        <div className="bg-blue-950"></div>
        <div className="bg-blue-950"></div>
        <div></div>
      </div>
      <div 
      data-aos="fade-down"
      data-aos-duration="400" 
      data-aos-once="true" 
      className="lg:w-[65%] relative lg:left-12 py-0 w-[88%]">
        <div className="mb-8 border-b-2 border-gray-300 py-[3rem] text-center lg:text-start">
          <div className="text-black mb-[0.5rem] font-medium font-subtitle">
            OUR SERVICES
          </div>
          <div className="lg:flex lg:items-end lg:justify-between font-title">
            <div className="text-black mb-[0.5rem] lg:w-[45%] text-[32px] lg:text-[64px] font-medium leading-tight">
              A comprehensive set of services
            </div>
            <div className="text-gray-500 mb-[1.5rem] lg:w-[40%] text-[15px] lg:text-[18px] font-medium font-about">
            Welcome to our Services Section! Our commitment to providing high-quality services is at the core of what we do. 
            In this section, we aim to introduce you to our wide array of services tailored to meet your needs.
            </div>
          </div>
        </div>

        <div 
        data-aos="fade-down"
        data-aos-duration="400" 
        data-aos-once="true" 
        data-aos-delay="150"
        className="grid gap-8 lg:grid-cols-2">
          {servicesLinks.map((service, index) => (
            <a
              key={index}
              href={service.href}
              className="border-b-2 border-gray-300 p-4 relative group"
              style={{ textDecoration: "none" }}
            >
              <div className="w-12 lg:w-16 mb-1 lg:mb-0 lg:mr-4">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex items-center justify-between mb-[10px] group-hover:text-red-600">
                <h2 className="text-[1.2rem] lg:text-[1.5rem] py-[0.25rem] lg:py-[0.5rem] font-semibold group-hover:text-red-600 transition-all duration-300">
                  {service.title}
                </h2>
                <MdArrowOutward
                  className="ml-2 lg:ml-[1rem] group-hover:-translate-y-1 transition-all duration-300"
                  size={28}
                />
              </div>
              <p className="text-[14.5px] lg:text-[17px] text-gray-500 mt-2 lg:mt-0 lg:w-[90%] font-medium pb-[0.5rem]">
                {service.text}
              </p>
            </a>
          ))}
        </div>
        {/* <ServicesButtons /> */}
      </div>
    </div>
  );
};

export default Services;