import React from 'react'

import dottedrows from '../assets/feature-section1-dottedrows.png'
import quotes from '../assets/quotes.svg'
import { TestimonoialsSectionData } from '../constants'


// slider 
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';
// or other themes
import '@splidejs/react-splide/css/skyblue';
// or only core styles
import '@splidejs/react-splide/css/core';



const Testimonial = ({ profilePhoto, quote, name, title, companyLogo }) => (
  <div className="flex flex-col sm:flex-row max-w-[960px] items-center mx-auto p-7">
    <img src={profilePhoto} alt="profilePhoto" className="rounded-xl w-[260px] h-[260px] lg:w-[320px] lg:h-[320px] object-contain " />

    <div className="flex max-w-[400px] lg:flex-col flex-col-reverse  items-center lg:items-start lg:ml-24 py-8">

      <div className=' '>
        <img src={quotes} alt="" width="35px" height="40px" className="-mb-2  mix-blend-multiply" />
        <p className="font-mullish text-3xl font-extralight ">{quote}</p>
        <a href="/" className="text-grayText italic underline ">Learn More</a>
      </div>

      <div className='flex flex-col items-center lg:items-start'>
        <p className="font-mullish font-black text-2xl -order-1 ">{name}</p>
        <p className="font-mullish font-medium ">{title}</p>
        <img src={companyLogo} alt="" width="240px" height="40px" className=" " />
      </div>

    </div>
  </div>
)


const TestimonialsSection = () => {
  return (
    <section className="relative">

      <div className="w-11/12 max-w-[1300px] mx-auto relative pt-20">
        <img src={dottedrows} alt="dottedrows" className="hidden lg:flex absolute w-[200px] top-[8rem] left-[2rem] -z-10" />

        <h2 className="font-mullish font-extrabold text-2xl leading-[1.8rem] text-center">
          An Experience<br />People Love to Talk About
        </h2>
        <div className="w-6 h-1 bg-greenLight mx-auto my-4"></div>


        <button className="w-[100px] h-[100px] bg-[#f4f8ff] rounded-full absolute left-0 top-1/2 flex justify-center items-center cursor-pointer">
          <div className="w-[65%] h-[65%] bg-[#f4f8ff] rounded-full flex justify-center items-center mix-blend-multiply"></div>
        </button>

        <button className="w-[100px] h-[100px] bg-[#f4f8ff] rounded-full absolute right-0 top-1/2 flex justify-center items-center cursor-pointer">
          <div className="w-[65%] h-[65%] bg-[#f4f8ff] rounded-full flex justify-center items-center mix-blend-multiply"></div>
        </button>


        <Splide aria-labelledby="My Favorite Images" >
          {TestimonoialsSectionData.map(testimo => (
            <SplideSlide key={testimo.id}>
              <Testimonial profilePhoto={testimo.image} quote={testimo.quote} name={testimo.name}
                title={testimo.title} companyLogo={testimo.companyLogo} />
            </SplideSlide>
          ))}
        </Splide>

      </div>

    </section>
  )
}

export default TestimonialsSection