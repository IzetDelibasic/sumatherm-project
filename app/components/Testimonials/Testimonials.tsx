import React from 'react';
import { testimonialsConstant } from '@/utils/constants/testimonialsConstant';
import TestimonialsButtons from "@/app/components/TestimonialsAction/TestimonialsButtons";
import Image from 'next/image';

const Testimonials = () => {
  return (
    <div 
      data-aos="fade-up"
      data-aos-duration="500" 
      data-aos-once="true" 
      data-aos-delay="200"
      className="lg:h-[90rem] h-[150rem] flex flex-col relative mb-[10rem] text-center lg:text-start"
    >
      <div className="lg:h-[70%] h-[85%] bg-black">
        <div className='absolute lg:w-[10rem] lg:h-[10rem] w-[5rem] h-[5rem] grid grid-cols-2 grid-rows-2 gap-0 top-0 right-0'>
          <div></div>
          <div className='bg-white'></div>
          <div className='bg-white'></div>
          <div></div>
        </div>
      </div>
      <div className="lg:h-[30%] h-[15%] bg-white "></div>
      <div className='lg:flex-col lg:w-[65%] mx-auto'>
        <div className="mb-[0rem] text-center absolute inset-0 lg:top-[17rem] top-[11rem] w-[90%] lg:w-full mx-auto">
          <div className='mb-[0.5rem] text-white font-medium'>TESTIMONIALS</div>
          <div className='lg:mb-[0.5rem] mb-[3rem] text-white text-[28px] lg:text-[58px] font-semibold lg:w-[30%] mx-auto'>What our clients say about us</div>
          <div className='border-b-2 border-neutral-400 lg:w-[65%] mx-auto'></div>    
        </div>
        <div className="absolute inset-0 lg:flex lg:flex-wrap justify-between lg:w-[65%] lg:top-[38rem] top-[28rem] mx-auto flex-col">
          {testimonialsConstant.map((testimonial, index) => (
            <div key={index} className="lg:w-[32%] mb-4 w-[90%] mx-auto lg:mx-0">
              {(index % 2 === 0) ? (
                <>
                  <div className='flex flex-col-reverse lg:flex lg:flex-col'>
                    <Image 
                      src={testimonial.image} 
                      alt={`Testimonial ${index + 1}`} 
                      width={400} 
                      height={500} 
                      className="w-[400px] lg:h-[500px] h-[350px] mb-2" 
                    />
                    <div className='flex-col justify-between group'> 
                      <div className="lg:text-[24px] text-[20px] lg:text-black text-white font-semibold h-[40px] mb-[2rem]">{testimonial.heading}</div> 
                      <div className="text-[16px] lg:text-neutral-600 text-white font-medium mb-[1rem]">{testimonial.title}</div>
                      <div className='flex items-center justify-center lg:mx-[5px] lg:mb-0 mb-[2rem]'>
                      <Image
                        src={testimonial.icon}
                        alt={`Icon ${index + 1}`}
                        width={40} 
                        height={40} 
                        className="w-[2.5rem] h-[2.5rem] mr-[1rem]"
                      />                       
                      <div className="text-[15px] lg:text-black text-white">{testimonial.person}</div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className='flex-col justify-between group'> 
                    <div className="text-[24px] text-white font-semibold h-[40px] mb-[2rem]">{testimonial.heading}</div> 
                    <div className="text-[16px] text-white font-medium mb-[1rem]">{testimonial.title}</div>
                    <div className='flex items-center justify-center lg:mx-[5px] lg:mb-0 mb-[2rem]'>
                    <Image
                      src={testimonial.icon}
                      alt={`Icon ${index + 1}`}
                      width={40} 
                      height={40} 
                      className="w-[2.5rem] h-[2.5rem] mr-[1rem]"
                    />
                      <div className="text-[15px] text-white">{testimonial.person}</div>
                    </div>
                  </div>
                  <Image 
                      src={testimonial.image} 
                      alt={`Testimonial ${index + 1}`} 
                      width={400} 
                      height={500} 
                      className="w-[400px] lg:h-[500px] h-[350px] mt-2" 
                    />                   
                  </>
              )}
            </div>
          ))}
        </div>
        <TestimonialsButtons />
      </div>
    </div>
  );
}

export default Testimonials;
