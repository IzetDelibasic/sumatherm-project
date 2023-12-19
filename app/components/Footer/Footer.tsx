import React from 'react'
import { headerLogo } from '@/utils/constants/imagesConstants';
import Link from 'next/link';
import Image from 'next/image';
import { linksConstant } from '@/utils/constants/linksConstant';
import { othersConstant } from '@/utils/constants/othersConstant';

const Footer = () => {
  return (
    <div className='bg-black'>
      <div className='lg:flex lg:items-start lg:justify-between lg:w-[65%] w-[90%] text-center lg:text-start mx-auto lg:py-[6rem] py-[3rem]'>
        <div className='flex flex-col lg:w-[35%]'>
          <Link href="/" passHref className='lg:py-0 lg:pb-[1.5rem] py-[1rem] mx-auto lg:mx-0'>
            <span className="">
              <Image src={headerLogo} alt="Logo - Construcfy X Webflow Template" width={50} height={50} />
            </span>
          </Link>
          <div className='mb-[0.5rem] text-white lg:text-[14px] text-[14px] font-medium'>
            Lorem ipsum dolor sit amet consectetur aenean sit urna aliquet tellus egestas id elementum venenatis proin a congue commodo.
          </div>
        </div>
        <div className='flex flex-col my-[1rem] lg:my-0'>
          <div className='text-white lg:text-[15px] text-[17px] font-semibold lg:border-l-2 lg:border-hyellow-100 px-[1rem] mb-[0.5rem]'>Links</div>
          <div className='text-neutral-400 lg:text-[14px] text-[14px] font-lighter px-[1rem]'>
            {linksConstant.map((category, index) => (
              <div key={index}>
                <ul>
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link href={item.href} passHref>
                        <div className='py-[0.3rem]'>{item.name}</div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col my-[1rem] lg:my-0'>
          <div className='text-white lg:text-[15px] text-[17px] font-semibold lg:border-l-2 lg:border-hyellow-100 px-[1rem] mb-[0.5rem]'>Others</div>
          <div className='text-neutral-400 lg:text-[14px] text-[14px] font-lighter px-[1rem]'>
            {othersConstant.map((category, index) => (
              <div key={index}>
                <ul>
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link href={item.href} passHref>
                        <div className='lg:py-[0.3rem] py-[0.2rem]'>{item.name}</div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col my-[1rem] lg:my-0'>
          <div className='text-white lg:text-[15px] text-[17px] font-semibold lg:border-l-2 lg:border-hyellow-100 px-[1rem] mb-[0.5rem]'>Others</div>
          <div className='text-white lg:text-[14px] text-[14px] font-lighter px-[1rem] py-[1rem]'>
            Follow us on Social Media
          </div>
        </div>

      </div>
      <div className='flex lg:items-start justify-between lg:w-[65%] w-[80%] text-center lg:text-start mx-auto lg:pb-[6rem] pb-[3rem]'>
        <div className='text-white lg:text-[14px] text-[14px] font-lighter'>2020 DTerms.All Right Reserved</div>
        <div className='text-white lg:text-[14px] text-[14px] font-lighter'>English</div>
      </div>
    </div>
  );
};

export default Footer;