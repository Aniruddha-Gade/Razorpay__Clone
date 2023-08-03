import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';
import { BiCheck } from 'react-icons/bi';
import buisnessBankingImage from '../assets/buisness-banking.png'
import razorpayXLogo from '../assets/razorpayX.svg'
import xflame1 from '../assets/x-flame-1.png'
import xflame2 from '../assets/x-flame-2.png'
import featureWave from '../assets/features2-wave.svg'

import { BusinessBankingSection_features, BusinessBankingCards } from '../constants';



const Feature = ({ title }) => (
  <li className='flex gap-4 items-center text-lightGray'>
    <BiCheck size={27} className='text-green-300' />
    {title}
  </li>
)



const Card = ({ title, desc, logo }) => (
  <div className='w-[340px] xs:w-full sm:w-[360px] lg:w-full min-h-[14rem] relative cursor-pointer hover:shadow-2xl group '>
    <img src={logo} alt={logo} className='bg-lightBlue absolute right-3 top-3 w-12 h-12 rounded-full z-[8] transition-all duration-200 group-hover:contrast-200' />
    <img src={featureWave} className='hidden group-hover:flex absolute right-0 bottom-2 z-[100] ' alt='feature Wave' />

    <svg viewBox="0 0 349.32501220703125 225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
      className="stroke-1 group-hover:stroke-0 stroke-[#525a76] h-full w-full absolute z-[90] featureCardSVG transition-all duration-200"
      style={{ strokeOpacity: 0.8 }}>
      <path d="m 0 6 
                    a 6 6 0 0 1 6 -6 
                    h 250.32501220703125 
                    a 16 16 0 0 1 11 5 
                    l 77 77 
                    a 16 16 0 0 1 5 11 
                    v 126 
                    a 6 6 0 0 1 -6 6 
                    h -337.32501220703125 
                    a 6 6 0 0 1 -6 -6 
                    z" fill="#181C2E"></path>
    </svg>

    <div className='z-[1000] absolute h-full w-full pl-5 py-6 pr-8 flex flex-col justify-between'>
      <h3 className='font-extrabold text-slate-100 leading-[1.2] text-[1.375rem]'>{title}</h3>
      <p className='text-grayText'>{desc}</p>
      <div className='flex font-bold text-lightBlue items-center cursor-pointer gap-2'>
        <a href='/'>Know More</a>
        <IoIosArrowForward />
      </div>
    </div>
  </div>
);


const Button = ({ title }) => (
  <button className="relative  w-full lg:w-fit bg-lightBlue flex items-center justify-start text-white py-[14px] px-[18px] md:pr-[90px] 
         rounded-md  font-bold hover:bg-lightBlue500 transition-all duration-200">
    {title}

    <div className="w-12 h-[60px] bg-greenLight absolute right-6 skew-x-[20deg] flex justify-center items-center">
      <svg viewBox="0 0 24 24" focusable="false" className="w-[20px] h-[20px] -skew-x-[20deg] ">
        <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
      </svg>
    </div>
  </button>
)





const BusinessBankingSection = () => {
  return (
    <section className=' bg-[url(./assets/feature-section-2BG.svg)] bg-no-repeat bg-cover pb-[50px] lg:pb-[400px] mt-14 pt-[7rem] lg:pt-[12rem]'>

      <div className='relative w-11/12 max-w-[1080px] mx-auto lg:pt-4'>

        {/* for mobile */}
        <img src={xflame1} alt="xflame1" loading="lazy" className="sm:hidden absolute transform scale-y-[-1] top-[14px] -right-10 w-[200px]" />
        <h2 className="sm:hidden text-[2.7rem] leading-[1.2] text-white font-bold">
          Explore  <br />
          <img src={razorpayXLogo} alt={razorpayXLogo} className='inline w-[195px] h-[38px] ' /> <br />
          <span className='text-green-400 font-extrabold'>Business <br /> Banking</span>
        </h2>
        <div className="sm:hidden w-6 h-1 bg-greenLight  mt-4 mb-20"></div>

        {/* for desktop  - heading */}
        <h2 className="hidden sm:flex items-center justify-center text-2xl leading-[1.2] text-white font-bold">Explore RazorpayX powered Business Banking</h2>
        <div className="hidden sm:flex w-6 h-1 bg-greenLight mx-auto mt-4 mb-20"></div>


        {/* main feature box */}
        <div className="w-full min-h[440px] flex flex-col relative">
          {/* flame images  */}
          <img src={xflame1} alt="xflame1" loading="lazy" className="hidden lg:flex absolute -top-[142px] -left-[140px] w-[200px]" />
          <img src={xflame2} alt="xflame2" loading="lazy" className="hidden lg:flex absolute top-[150px] -right-[180px] w-[200px]" />


          {/* content box */}
          <div className='relative w-full bg-[#181c2e] p-10 py-12 border border-slate-700 z-20 rounded-md '>
            {/* left part */}
            <div className='flex flex-col justify-between items-start h-full w-full gap-12 z-20'>

              {/* heading for mobile */}
              <h3 className="sm:hidden text-xl text-white font-extrabold leading-7 max-w-[500px] ">
                Open and operate <br /> fully-functional Current Acounts and RazorpayX
              </h3>

              {/* heading for desktop */}
              <h3 className="hidden sm:flex text-[28px] text-white font-bold leading-10 max-w-[500px] ">
                Manage your company’s finances and supercharge your business banking with
                <img src={razorpayXLogo} alt={razorpayXLogo} className='inline ml-3 w-[168px] h-[32px] ' />
              </h3>

              <ul className='flex flex-col gap-3'>
                {BusinessBankingSection_features.map(feature => (
                  <Feature key={feature.id} title={feature.title} />
                ))}
              </ul>



              <div className='mt-7 lg:mt-0 flex flex-col-reverse lg:flex-row font-bold items-center gap-7 w-full'>
                <Button title={'Sign Up Now'} />
                <div className='flex self-start lg:self-center text-lightBlue hover:text-lightBlue300 items-center  gap-2'>
                  <a href='/' className=''>Know More</a>
                  <IoIosArrowForward />
                </div>
              </div>

            </div>

            {/* right part image  */}
            <div>
              <img src={buisnessBankingImage} className='hidden sm:flex sm:max-w-[400px] max-w-[650px] right-0 bottom-0 absolute' alt='paymentSuite' />
            </div>
          </div>



          {/* 6 cards */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-4 my-14'>
            {BusinessBankingCards.map(card => (
              <Card key={card.id} title={card.title} desc={card.desc} logo={card.logo} bgColor={`white`} />
            ))}
          </div>


          <div className="w-full items-center justify-evenly border border-slate-700
              mb-24 gap-y-6  relative rounded-md p-8 hidden md:flex md:flex-col lg:flex-row lg:flex">
            <p className="font-mullish text-white text-xl">Check out the live demo to learn how RazorpayX works.
              <span className="font-bold"> No sign-up required!</span>
            </p>

            <Button title={'Check out the demo'} />

          </div>
        </div>

      </div>
    </section>
  )
}

export default BusinessBankingSection