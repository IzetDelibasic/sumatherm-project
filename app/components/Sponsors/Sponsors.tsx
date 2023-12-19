// -React-
import React from "react";
// -Icons-
import { sponsorsIcons } from "@/utils/constants/sponsorsLinks";
// -Next-
import Image from 'next/image';


const Sponsors = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-once="true"
      data-aos-delay="200"
      className="lg:flex lg:justify-between lg:items-center lg:w-[80%] lg:pr-[0rem] lg:mb-[5rem] my-[4rem] md:mx-auto lg:mx-0"
    >
      <div className="text-gray-600 font-medium flex justify-center mb-[1rem] lg:mb-0">
        SUPPORTED BY
      </div>
      <div className="lg:flex lg:justify-center flex flex-wrap justify-center w-[85%] mx-auto">
        {sponsorsIcons.map((icon, index) => (
          <div key={index} className="w-[22%] h-[3rem] lg:w-[7rem] lg:h-[2rem] mr-[2rem]">
            <Image
              src={icon.icon}
              alt={`Icon ${index}`}
              width={100}
              height={100} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;