import React from 'react'
import Button from '@/app/components/Button'
import Image from 'next/image'
import { articlesImage } from '@/utils/constants/imagesConstants'

const Articles = () => {
  return (
    <div 
    data-aos="fade-down"
    data-aos-duration="500" 
    data-aos-once="true" 
    data-aos-delay="200"
    className='lg:w-[65%] mx-auto my-[10rem] w-[90%] text-center lg:text-start'>
        <div className='lg:flex lg:items-center lg:justify-between lg:flex-row flex flex-col items-center'>
            <div className='flex flex-col lg:w-[60%] w-[80%] mx-auto lg:mx-0'>
                <div className='mb-[0.5rem] font-medium'>OUR BLOG</div>
                <div className='mb-[0.5rem] lg:text-[56px] text-[30px] font-medium'>Latests news and articles</div>
            </div>
            <Button
              className="relative bg-yellow-500 text-black border-[1px] border-black font-medium lg:py-[1.5rem] py-[1rem] lg:px-[2.5rem] px-[4.5rem] md:px-[11rem] rounded-[3rem] group overflow-hidden z-[1] hover:border-opacity-0 hover:border-transparent"
              iconClassName=""
              title='Browse all articles'
              titleClassName="group-hover:text-white"
              href='/articles'
              
            >
              <div className="absolute inset-0 bg-neutral-100 w-full transform origin-right transition-transform duration-300 group-hover:scale-x-0 z-[-1]"></div>
            </Button>
        </div>

        <div className='lg:flex lg:justify-between'>
            <div className='flex-col lg:w-[60%] mt-[3rem] lg:pr-10 lg:border-r-2 group'>
                <div className='lg:w-full overflow-hidden'>
                    <Image
                        src={articlesImage}
                        alt={'Article'}
                        width={500} 
                        height={500}
                        layout="responsive" 
                        className='object-contain transform transition-transform duration-300 group-hover:scale-[130%] group-hover:rotate-[-10deg]'
                    />
                </div>
                <div className='flex flex-col mt-[1rem] lg:mt-[2rem]'>
                    <div className='font-medium text-[18px] break-words mb-[1rem]'>
                        REMODELING ── APR 18, 2023
                    </div>
                    <div className='mb-2 text-[28px] lg:w-[95%] lg:text-[34px] font-medium break-words lg:group-hover:text-hyellow-100 lg:group-hover:transition-all lg:group-hover:duration-300 '>
                    12 designers tricks for picking the perfect home color palette
                    </div>
                    <div className='text-gray-500 font-medium'>Lorem ipsum dolor sit amet consectetur aenean sit urna aliquet tellus egestas id elementum venenatis proin a congue commodo.</div>
                    <div className='border-b-2 border-gray-300 my-5 lg:my-10'></div>
                </div>
            </div>
            <div className='flex-col lg:w-[50%] lg:pl-[2rem] lg:my-auto'>
                <div className='flex flex-col mt-[1rem] group'>
                    <div className='font-medium text-[18px] break-words mb-[1rem]'>
                        DESIGN ── APR 18, 2023
                    </div>
                    <div className='mb-2 text-[28px] lg:w-[95%] lg:text-[28px] font-medium break-words lg:group-hover:text-hyellow-100 lg:group-hover:transition-all lg:group-hover:duration-300 '>
                        25 color trends designers cant wait to see in 2023
                    </div>
                    <div className='text-gray-500 font-medium'>Viverra aenean feugiat lectus sollicitudin odio habitasse id sagittis sollicitudin et nec donec mi eu quam nunc sed leo.</div>
                </div>
                <div className='border-[1px] border-gray-300 my-5 lg:my-[4rem]'></div>
                <div className='flex flex-col mt-[1rem] lg:mt-[2rem] group'>
                    <div className='font-medium text-[18px] break-words mb-[1rem]'>
                        CONSTRUCTION ── APR 18, 2023
                    </div>
                    <div className='mb-2 text-[28px] lg:w-[95%] lg:text-[28px] font-medium break-words lg:group-hover:text-hyellow-100 lg:group-hover:transition-all lg:group-hover:duration-300 '>
                        Clever DIY home improvements you can do during the pandemic
                    </div>
                    <div className='text-gray-500 font-medium'>Euismod placerat eu nec blandit volutpat magna sed fames arcu pharetra et arcu odio sollicitudin netus id nibh at orci.</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Articles