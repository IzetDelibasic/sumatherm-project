// -React-
import React from 'react'
// -Next-
import Link from 'next/link';
import Image from 'next/image';
// -Constants-
import { headerLogo } from '@/utils/constants/imagesConstants';
import { linksConstant } from '@/utils/constants/linksConstant';
import { othersConstant } from '@/utils/constants/othersConstant';
// -Icons-
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";




const Footer = () => {
  return (
    <div className='bg-blue-950'>
      <div className='lg:flex lg:items-start lg:justify-between lg:w-[65%] w-[90%] text-center lg:text-start mx-auto lg:py-[6rem] py-[3rem]'>
        <div className='flex flex-col lg:w-[35%]'>
          <Link href="/" passHref className='lg:py-0 lg:pb-[1.5rem] py-[1rem] mx-auto lg:mx-0'>
            <span className="">
              <Image src={headerLogo} alt="Logo - Construcfy X Webflow Template" width={200} height={100} />
            </span>
          </Link>
          <div className='mb-[0.5rem] text-white lg:text-[15px] text-[15px] font-medium font-about'>
          All content on the official Sumatherm GmbH website is the property of the company, with the exception of the elements listed in the data protection regulations. 
          Any kind of copying or downloading of the content or parts thereof without the written consent of the owner is regarded as a criminal offense.
          </div>
        </div>
        <div className='flex flex-col my-[1rem] lg:my-0'>
          <div className='text-white lg:text-[18px] text-[17px] font-semibold lg:border-l-4 lg:border-red-600 px-[1rem] mb-[0.5rem] font-subtitle'>RESOURCES</div>
          <div className='text-neutral-400 lg:text-[15px] text-[15px] font-lighter px-[1rem]'>
            {linksConstant.map((category, index) => (
              <div key={index}>
                <ul>
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link href={item.href} passHref>
                        <div className='py-[0.3rem] font-about uppercase'>{item.name}</div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col my-[1rem] lg:my-0'>
          <div className='text-white lg:text-[18px] text-[17px] font-semibold lg:border-l-4 lg:border-red-600 px-[1rem] mb-[0.5rem] font-subtitle'>OUR COMPANIES</div>
          <div className='text-neutral-400 lg:text-[15px] text-[15px] font-lighter px-[1rem]'>
            {othersConstant.map((category, index) => (
              <div key={index}>
                <ul>
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link href={item.href} passHref>
                        <div className='lg:py-[0.3rem] py-[0.2rem] font-about uppercase'>{item.name}</div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col my-[1rem] lg:my-0'>
          <div className='text-white lg:text-[18px] text-[17px] font-semibold lg:border-l-4 lg:border-red-600 px-[1rem] mb-[0.5rem] font-subtitle'>OTHERS</div>
          <div className='text-white lg:text-[15px] text-[15px] font-lighter px-[1rem] font-about'>SUMATHERM GmbH</div>
          <div className='text-white lg:text-[15px] text-[15px] font-lighter px-[1rem] font-about'>Gewerbepark Lindach B 11</div>
          <div className='text-white lg:text-[15px] text-[15px] font-lighter px-[1rem] font-about'>84489 Burghausen</div>
          <div className='text-white lg:text-[15px] text-[15px] font-lighter px-[1rem] font-about'>Telefon: +49 (0) 8677/ 908 94-0</div>
          <div className='flex py-[1rem] lg:ml-[1rem] mx-auto lg:mx-0'>
            <FaFacebook className='text-white h-[2rem] w-[2rem] mr-[0.5rem]' />
            <FaTwitterSquare className='text-white h-[2rem] w-[2rem] mr-[0.5rem]' />
            <FaInstagramSquare className='text-white h-[2rem] w-[2rem] mr-[0.5rem]' />
            <FaYoutubeSquare className='text-white h-[2rem] w-[2rem] mr-[0.5rem]' />
          </div>
        </div>

      </div>
      <div className='flex lg:items-start justify-between lg:w-[65%] w-[80%] text-center lg:text-start mx-auto lg:pb-[6rem] pb-[3rem]'>
        <div className='text-white lg:text-[14px] text-[14px] font-lighter font-about'>© 2020 SUMATHERM GmbH Trademarks and brands are the property of their respective owners.</div>
        <div className='text-white lg:text-[14px] text-[14px] font-lighter font-about'>Datenschutz | Impressum</div>
      </div>
    </div>
  );
};

export default Footer;