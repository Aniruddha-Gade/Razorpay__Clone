import React from 'react'
import heroImage from '../assets/hero-illustration.jpg'
import heroShape from '../assets/hero-shape.svg'
import Button from './Button';

const Header = () => {
  return (
    <header className='relative  bg-deepBlue'>

      <div className='w-10/12 max-w-[1080px] mx-auto  flex flex-col lg:flex-row justify-between items-center '>
        {/* left part */}
        <div className='space-y-8'>
          <h1 className='text-white text-[35px] sm:text-[30px] lg:text-[40px] font-extrabold leading-[1.2] mt-7'>
            Power your finance, grow your business
          </h1>

          <div className='h-1 w-6 bg-greenLight'></div>

          <p className='text-slate-400 text-[18px] leading-7 font-semibold'>
            Accept payments from customers. Automate payouts to vendors & employees. Never run out of working capital.
          </p>

          {/* <button className='bg-lightBlue text-white py-2 px-3 rounded-md flex gap-2 items-center
            hover:bg-lightBlue500 transition-all duration-200 font-semi bold'>
            Sign Up Now
            <BsArrowRightShort className='w-[25px] h-[30px] ' />
          </button> */}
          <Button title={'Sign Up Now'}/>
        </div>

        {/* right part image */}
          <img src={heroImage} alt={heroImage} className='max-w-[350px] lg:max-w-[680px]'/>
      </div>

      {/* shape part */}
      <div className='absolute left-0 right-0 w-[103%] '>
        <img src={heroShape} alt='heroShape' className='object-fill w-full '/>
      </div>
    </header>
  )
}

export default Header