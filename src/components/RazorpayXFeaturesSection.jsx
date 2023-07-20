import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';

import { RazorpayXFeatures } from '../constants';
import featureSectionDottedRows from '../assets/feature-section1-dottedrows.png'



const Card = ({ title, desc, logo }) => (
  <div className='p-10 w-full max-h-[300px] cursor-pointer bg-no-repeat hover:scale-105 
     transition-all duration-200 shadow-lg bg-white'>
    <img src={logo} alt={logo} className='bg-lightBlue w-10 h-10 rounded-full transition-all duration-200' />

    <div className='w-full h-full flex flex-col mt-3'>
      <h3 className='font-extrabold text-deepBlueHead leading-[1.2] text-[1.375rem]'>{title}</h3>
      <p className=' text-grayText my-3'>{desc}</p>
      <div className='flex font-bold text-lightBlue hover:text-grayBlue items-center cursor-pointer gap-2'>
        <a href='/'>Know More</a>
        <IoIosArrowForward />
      </div>
    </div>


  </div>
);



const RazorpayXFeaturesSection = () => {
  return (
    <section className='bg-white relative'>
      <div className='relative w-11/12 max-w-[1080px] mx-auto pt-4'>
        <img src={featureSectionDottedRows} alt="featureSectionDottedRows" className="hidden lg:flex absolute w-[233px] left-[300px] -top-[6rem] z-10" />
        <img src={featureSectionDottedRows} alt="featureSectionDottedRows" className="hidden lg:flex absolute w-[233px] -right-[3.5rem] -top-[6rem] z-10" />

        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-4 relative z-[100]'>
          <div className=" flex items-center z-0">
            <h2 className=" font-mullish font-extrabold text-[2.5rem] sm:text-[2.75rem] leading-[3.75rem]">
              New in the
              <span className="text-lightBlue500"> Razorpay</span> <br />
              Product Suite
            </h2>
          </div>

          {RazorpayXFeatures.map(card => (
            <Card key={card.id} title={card.title} desc={card.desc} logo={card.logo} />
          ))}
        </div>
      </div>


    </section>
  )
}

export default RazorpayXFeaturesSection
