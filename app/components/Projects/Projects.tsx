'use client'
// -React-
import React, { useState, useEffect } from 'react';
// -Constants-
import { projectsConstant } from '@/utils/constants/projectsConstant';
import { projectPhotoOne, projectPhotoTwo } from '@/utils/constants/imagesConstants';
// -Buttons-
import ProjectButtons from '@/app/components/ProjectsAction/ProjectButtons';
import Button from '@/app/components/Button';
import ArrowButton from '@/app/components/ProjectsActionTwo/ArrowButton';
// -Icons-
import { MdOutlineArrowBack, MdOutlineArrowForward } from 'react-icons/md';
import { FaCircle } from 'react-icons/fa';
// -Next-
import Image from 'next/image';


const ProjectsComponent = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handleNext = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex === projectsConstant.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex === 0 ? projectsConstant.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentProjectIndex]);

  const currentProject = projectsConstant[currentProjectIndex];

  return (
    <div 
    data-aos="fade-up"
    data-aos-duration="500" 
    data-aos-once="true" 
    data-aos-delay="200"
    className='lg:w-[60%] mx-auto my-[10rem] w-[90%]'>
      <div className='lg:flex lg:items-end lg:justify-between top-[4rem] right-[6rem] text-center lg:text-start'>
        <div className='flex flex-col lg:w-[50%]'>
          <div className='mb-[0.5rem] font-medium'>EXCLUSIVE BENEFITS</div>
          <div className='mb-[0.5rem] lg:text-[54px] text-[30px] font-medium'>You should choose us</div>
        </div>
        <ProjectButtons />
      </div>
      <div className='border-b-2 border-gray-200 pt-10 mx-auto'></div>
      <div className='flex flex-col lg:flex-row justify-between items-center mx-auto my-10 group text-center lg:text-start h-[40rem]'>
        <div className='lg:w-[50%] overflow-hidden'>
          <Image
            src={currentProject.image}
            alt={currentProject.title}
            width={800} 
            height={800}
            layout="responsive" 
            className='object-contain transform transition-transform duration-300 group-hover:scale-[130%] group-hover:rotate-[-10deg]'
          />
        </div>
        <div className='flex flex-col lg:w-[40%] mt-6 lg:mt-0'>
          <div className='h-[60%]'>
            <div className='mb-2 font-medium text-[18px] break-words'>
              <FaCircle className="text-red-600 inline-block mr-1 text-[7px]" />
              {currentProject.title}
            </div>
            <div className='mb-2 text-[28px] lg:text-[38px] font-medium break-words lg:group-hover:text-red-600 lg:group-hover:transition-all lg:group-hover:duration-300 '>
              {currentProject.heading}
            </div>
          </div>
          <div className='text-gray-500 font-medium'>{currentProject.text}</div>
          <div className='border-b-2 border-gray-300 my-5 lg:my-10'></div>
          <div className='flex justify-between text-[38px] lg:text-[32px]'>
            <button className='hover:text-red-600 transition-none' onClick={handlePrev}>
              <MdOutlineArrowBack className='' />
            </button>
            <button className='hover:text-red-600 transition-none' onClick={handleNext}>
              <MdOutlineArrowForward className='' />
            </button>
          </div>
        </div>
      </div>

      {/* <div className='flex flex-col lg:flex-row justify-between items-center mx-auto lg:my-[8rem] text-center lg:text-start'>
        <div className='lg:w-[50%] w-full lg:order-1'>
          <div className='lg:text-left'>
            <div className='mb-[0.5rem] font-medium'>OUR MISSION</div>
            <div className='mb-[0.5rem] text-[36px] lg:text-[52px] lg:font-semibold font-medium leading-tight lg:leading-none break-words'>Our mission is to deliver high quality work</div>
          </div>
          <div className='text-gray-500 font-medium lg:text-left text-[16px]'>
            Lorem ipsum dolor sit amet consectetur vitae pulvinar luctus quam ornare imperdiet bibendum consectetur amet morbi mauris non semper eget scelerisque proin eros sodales.
          </div>
          <div className='mt-4 flex justify-center lg:flex-none lg:justify-start'>
            <Button
              className="relative bg-yellow-500 text-black border-[1px] border-black font-medium lg:py-[1.5rem] py-[1rem] lg:px-[2.5rem] px-[4.5rem] md:px-[11rem] rounded-[3rem] group overflow-hidden z-[1] hover:border-opacity-0 hover:border-transparent"
              iconClassName=""
              title='Learn more'
              titleClassName="group-hover:text-white"
              href='/learn-more'
              
            >
              <div className="absolute inset-0 bg-neutral-100 w-full transform origin-right transition-transform duration-300 group-hover:scale-x-0 z-[-1]"></div>
            </Button>
          </div>
        </div>
        <div className='lg:w-[45%] lg:relative lg:order-2 lg:mt-0 mt-8 w-[70%]'>
          <div className='relative'>
            <Image
              src={projectPhotoTwo}
              alt='Project Photo Two'
              width={500} 
              height={400} 
              layout='responsive'
              objectFit='cover'
            />
            <div className='absolute grid grid-cols-2 grid-rows-2 gap-0 right-0 top-0 lg:w-[10rem] lg:h-[10rem] w-[5rem] h-[5rem]'>
              <div></div>
              <div className='bg-white'></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className='flex flex-col lg:flex-row-reverse justify-between items-center mx-auto lg:my-10 text-center lg:text-start'>
        <div className='lg:w-[50%] w-full lg:order-1'>
          <div className='lg:text-left lg:relative]'>
            <div className='mb-[0.5rem] font-medium'>OUR STORY</div>
            <div className='mb-[0.5rem] text-[36px] lg:text-[52px] lg:font-semibold font-medium leading-tight lg:leading-none break-words'>An exceptional quality that cant be beaten</div>
          </div>
          <div className='text-gray-500 font-medium lg:text-left text-[16px]'>
            Lorem ipsum dolor sit amet consectetur vitae pulvinar luctus quam ornare imperdiet bibendum consectetur amet morbi mauris non semper eget scelerisque proin eros sodales.
          </div>
          <div className='mt-6 lg:mt-[1.5rem] flex justify-center lg:flex-none lg:justify-start'>
            <ArrowButton />
          </div>
        </div>
        <div className='lg:w-[45%] lg:relative lg:order-2 lg:mt-0 mt-8 w-[70%]'>
          <div className='relative h-full'> 
            <Image
              src={projectPhotoOne}
              alt='Project Photo Two'
              width={500} 
              height={300}
              layout='responsive'
              objectFit='cover'
            />
            <div className='absolute grid grid-cols-2 grid-rows-2 gap-0 lg:left-0 lg:bottom-0 left-0 bottom-0 lg:w-[10rem] lg:h-[10rem] w-[5rem] h-[5rem]'>
              <div></div>
              <div></div>
              <div className='bg-white'></div>
              <div></div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ProjectsComponent;