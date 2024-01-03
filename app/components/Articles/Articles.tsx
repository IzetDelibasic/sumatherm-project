// -React-
import React from 'react'
// -Next-
import Image from 'next/image'
// -Constants-
import { certificateImage } from '@/utils/constants/imagesConstants'

const Articles = () => {
  return (
    <div 
    data-aos="fade-down"
    data-aos-duration="400" 
    data-aos-once="true" 
    className='lg:w-[65%] mx-auto my-[10rem] w-[90%] text-center lg:text-start'
    id='certificateSection'>
        <div className='lg:flex lg:items-center lg:justify-between lg:flex-row flex flex-col items-center'>
            <div className='flex flex-col lg:w-[60%] w-[80%] mx-auto lg:mx-0'>
                <div className='mb-[0.5rem] font-medium'>OUR CERTIFICATES</div>
                <div className='mb-[0.5rem] lg:text-[62px] text-[30px] font-medium font-title'>YOUR PASSION IS OUR MISSION</div>
            </div>
            {/* <Button
              className="relative bg-yellow-500 text-black border-[1px] border-black font-medium lg:py-[1.5rem] py-[1rem] lg:px-[2.5rem] px-[4.5rem] md:px-[11rem] rounded-[3rem] group overflow-hidden z-[1] hover:border-opacity-0 hover:border-transparent"
              iconClassName=""
              title='Browse all articles'
              titleClassName="group-hover:text-white"
              href='/articles'
              
            >
              <div className="absolute inset-0 bg-neutral-100 w-full transform origin-right transition-transform duration-300 group-hover:scale-x-0 z-[-1]"></div>
            </Button> */}
        </div>

        <div 
        data-aos="fade-up"
        data-aos-duration="400" 
        data-aos-once="true" 
        data-aos-delay="150"
        className='lg:flex lg:justify-between'>
            <div className='flex-col lg:w-[60%] mt-[3rem] lg:pr-10 lg:border-r-2 group'>
                <div className='lg:w-full overflow-hidden'>
                    <Image
                        src={certificateImage}
                        alt={'Article'}
                        width={500} 
                        height={500}
                        layout="responsive" 
                        className='object-contain transform transition-transform duration-300 group-hover:scale-[130%] group-hover:rotate-[-10deg]'
                    />
                </div>
                <div className='flex flex-col mt-[1rem] lg:mt-[2rem]'>
                    <div className='font-medium text-[18px] break-words mb-[1rem font-subtitle]'>
                        OUR EXPERIENCE AND PASSION
                    </div>
                    <div className='mb-2 text-[36px] lg:w-[95%] lg:text-[40px] font-medium break-words lg:group-hover:text-red-600 lg:group-hover:transition-all lg:group-hover:duration-300 font-title'>
                    Introducing to SumaTherm World
                    </div>
                    <div className='text-gray-500 font-medium font-about'>
                        Welcome to SumaTherm, where a commitment to quality, innovation, and customer experience forms the foundation of our business. We proudly highlight our rich experience and passion 
                        for delivering top-notch services. Our vision is to provide an even better approach to clients and ensure their satisfaction. Over the years, we have built the trust of our clients
                         by adhering to the highest standards of quality and dedication.</div>
                    <div className='border-b-2 border-gray-300 my-5 lg:my-10'></div>
                </div>
            </div>
            <div 
            data-aos="fade-down"
            data-aos-duration="400" 
            data-aos-once="true" 
            data-aos-delay="100"
            className='flex-col lg:w-[50%] lg:pl-[2rem] lg:my-auto'>
                <div className='flex flex-col mt-[1rem] group'>
                    <div className='font-medium text-[18px] break-words mb-[1rem] font-subtitle'>
                        OUR CERTIFICATES
                    </div>
                    <div className='mb-2 font-title text-[36px] lg:w-[95%] lg:text-[38px] font-medium break-words lg:group-hover:text-red-600 lg:group-hover:transition-all lg:group-hover:duration-300 '>
                        Sumatherm GmbH
                    </div>
                    <div className='text-gray-500 font-medium font-about'>DIN EN ISO 9001 : 2015 en</div>
                    <div className='text-gray-500 font-medium font-about'>ISO 3834 en</div>
                    <div className='text-gray-500 font-medium font-about'>ISO 3834 - 2 en</div>
                    <div className='text-gray-500 font-medium font-about'>AD 2000 - HP 0 und HP 100 R en</div>
                    <div className='text-gray-500 font-medium font-about'>EN 1090 - 2:2018 EXC 3 en</div>
                    <div className='text-gray-500 font-medium font-about'>Conformity of the Factory Production Control</div>
                    <div className='text-gray-500 font-medium font-about'>DIN EN ISO 9001 : 2015 en</div>
                </div>
                <div className='border-[1px] border-gray-300 my-5 lg:my-[4rem]'></div>
            </div>
        </div>
    </div>
  )
}

export default Articles