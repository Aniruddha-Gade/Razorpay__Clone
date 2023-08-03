import React from 'react'
import dottedrows1 from '../assets/feature-section1-dottedrows.png'
import paymentSuite from '../assets/payment-suite.png'
import featureWave from '../assets/features-wave.svg'

import Button from './Button'
import { IoIosArrowForward } from 'react-icons/io';
import { FcCheckmark } from 'react-icons/fc';

import { PaymentPagesCard_features, PaymentCards } from '../constants';


const Feature = ({ title }) => (
  <li className='flex gap-4 items-center'>
    <FcCheckmark />
    {title}
  </li>
)


const Card = ({ title, desc, logo }) => (
  <div className='w-[340px] xs:w-full sm:w-[360px] lg:w-full min-h-[15rem] relative cursor-pointer shadow-sm mb-7 group'>
    <img src={logo} alt={logo}
      className='bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[8] transition-all duration-200' />
    <img src={featureWave} className='hidden group-hover:flex absolute right-0 bottom-2 z-[1000] w-24 duration-500' alt='feature Wave' />

    <svg
      viewBox="0 0 349.32501220703125 225"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200 group-hover:shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]"
      style={{ strokeOpacity: 0.15 }}
    >
      <path
        d="m 0 6 
          a 6 6 0 0 1 6 -6 
          h 250.32501220703125 
          a 16 16 0 0 1 11 5 
          l 77 77 
          a 16 16 0 0 1 5 11 
          v 126 
          a 6 6 0 0 1 -6 6 
          h -337.32501220703125 
          a 6 6 0 0 1 -6 -6 
          z"
        fill="#fff"
      ></path>
    </svg>

    <div className='z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8 '>
      <h3 className='font-extrabold text-deepBlueHead leading-[1.2] text-[1.375rem]'>{title}</h3>
      <p className=' text-grayText '>{desc}</p>
      <div className='flex font-bold text-lightBlue hover:text-lightBlue300 items-center cursor-pointer gap-2'>
        <a href='/'>Know More</a>
        <IoIosArrowForward />
      </div>
    </div>
  </div>
);



const PaymentPagesCardSection = () => {
  return (
    <section className='relative mt-[190px] overflow-hidden'>
      {/* two images */}
      <img src={dottedrows1} alt='dottedrows1' loading='lazy' className='hidden lg:flex absolute w-[233px] h-[167px] -top-[8rem] left-[10rem]' />
      <img src={dottedrows1} alt='dottedrows1' loading='lazy' className='hidden lg:flex absolute w-[233px] h-[167px] top-[3rem] right-0' />


      <div className='relative w-11/12 max-w-[1080px] mx-auto pt-4'>
        <div className='flex items-center flex-col '>
          <h3 className='font-extrabold text-4xl lg:text-2xl text-center leading-[1.2]'>Accept Payments with Razorpay Payment Suite</h3>
          <div className='h-1 w-6 bg-greenLight mt-4 mb-9 lg:mb-20'></div>
        </div>


        {/* conent box */}
        <div className='flex flex-col lg:flex-row min-h-[520px] w-full bg-white rounded-md relative p-10 py-12 border-2 '>
          {/* left part */}
          <div className='flex flex-col justify-between w-full'>
            <h3 className='font-bold text-xl leading-6 lg:text-3xl lf:leading-10 max-w-[500px]'>
              Supercharge your business with the all powerful
              <span className='text-lightBlue'> Payment Gateway</span>
            </h3>

            <ul className='flex flex-col gap-3 mt-8'>
              {PaymentPagesCard_features.map(feature => (
                <Feature key={feature.id} title={feature.title} />
              ))}
            </ul>


            <div className='mt-7 lg:mt-0 flex flex-col-reverse lg:flex-row font-bold items-center gap-7'>
              <Button title={'Sign Up Now'} />
              <div className='flex self-start lg:self-center text-lightBlue hover:text-grayBlue items-center  gap-2'>
                <a href='/' className=''>Know More</a>
                <IoIosArrowForward />
              </div>
            </div>

          </div>

          {/* right part image  */}
          <div>
            <img src={paymentSuite} className='hidden lg:flex absolute right-0 bottom-0 max-w-[630px] ' alt='paymentSuite' />
          </div>

        </div>
      </div>


      {/* 6 cards */}
      <div className='mt-20 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto max-w-[1080px] place-items-center '>
        {PaymentCards.map(card => (
          <Card key={card.id} title={card.title} desc={card.desc} logo={card.logo} bgColor={`white`} />
        ))}
      </div>


      <div className='mx-auto w-[90%] lg:max-w-[1080px]  flex justify-center items-center border border-slate-300 py-5 px-5 bg-[#e9f2fd] rounded-lg'>
        <div className='flex flex-wrap gap-2 text-sm items-center'>
          <span className='font-bold text-lg'>Not sure which product to choose? </span>
          Answer a few questions and we’ll help you out
          <span className='font-extrabold flex items-center gap-1 text-lightBlue cursor-pointer'>
            Find me a product <IoIosArrowForward className='w-[0.8rem]' />
          </span>
        </div>
      </div>
    </section>
  )
}
//   <div className='flex flex-col xs:flex-row gap-2 text-sm'>
export default PaymentPagesCardSection