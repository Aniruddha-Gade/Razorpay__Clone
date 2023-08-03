import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import { Navlinks } from '../../constants/index';
import IndiaFlag from '../../assets/india-flag.svg';

import { BsArrowRightShort } from 'react-icons/bs';

import { IoIosArrowDown } from 'react-icons/io';
import { IoMdClose } from 'react-icons/io';
import { IoMenu } from 'react-icons/io5';


import CountryHoverBox from './Hover boxes/CountryHoverBox';

const Link = ({ title }) => (
  <li className='relative group text-white py-7 hover:text-lightBlue transition-all duration-200 cursor-pointer'>
    <a href={`${title}`} className=''>{title}</a>
    <div className='hidden group-hover:block absolute h-1 w-full bg-lightBlue bottom-0'></div>
  </li>
)




const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  // for hovering on india Flag
  const [countryHoverBox, setCountryHoverBox] = useState(false);
  // const [supportBox, setSupportBox] = useState(false);


  return (
    <nav className='w-full bg-deepBlue '>

      <div className=" relative md:w-[1080px] mx-auto flex items-center justify-between ">

        {/* logo */}
        <div className='hidden md:flex justify-center items-center'>
          <a href="/" className='py-7 pr-7'>
            <img src={logo} alt='Logo' className='w-[125px] h-[30px] ' />
          </a>
        </div>

        {/* all nav links  */}
        <ul className=' gap-5 hidden md:flex'>
          {Navlinks.map(navlink => (
            <Link key={navlink.id} title={navlink.title} />
          ))}
        </ul>

        {/* login sign up button */}
        <div className='hidden md:flex items-center gap-4 font-semibold ml-[1.75rem] '>
          {/* <div className=' flex gap-1 items-center group cursor-pointer'>
            <img src={IndiaLogo} alt='IndiaLogo' className='w-[30px] h-[30px] ' />
            <IoIosArrowDown className='text-white w-[15px] group-hover:text-lightBlue' />
          </div> */}

          <div onMouseEnter={() => setCountryHoverBox(true)} onMouseLeave={() => setCountryHoverBox(false)}
            className="flex gap-1 items-center group cursor-pointer relative transition-all duration-500">
            <img src={IndiaFlag} alt="IndiaLogo" className="w-[30px] h-[30px]" />
            <IoIosArrowDown className="text-white w-[15px] group-hover:text-lightBlue" />
            {countryHoverBox && <CountryHoverBox />}
          </div>

          <button className='text-white border border-lightBlue py-2 px-5 rounded'>
            Log In
          </button>

          <button className='bg-white py-2 px-3 rounded flex gap-2 items-center text-lightBlue300 hover:text-lightBlue500'>
            Sign Up
            <BsArrowRightShort className='w-[25px] h-[30px] ' />
          </button>
        </div>



        {/* for mobile menu */}
        <div className='md:hidden w-full px-7 sm:px-14 flex justify-between items-center'>
          <div className='flex justify-center items-center'>
            <a href="/" className='py-7 pr-7'>
              <img src={logo} alt='Logo' className='w-[125px] h-[30px] ' />
            </a>
          </div>

          <div className='flex items-center'>
            <button className='text-white border border-lightBlue py-2 px-5 rounded mr-4'>
              Log In
            </button>


            <div onClick={() => setToggleMenu(prev => !prev)}
              className='xs:ml-4 cursor-pointer'>
              {
                toggleMenu
                  ? <IoMdClose color="#fff" size={25} />
                  : <IoMenu color="#fff" size={25} />
              }
            </div>


          </div>
          {
            toggleMenu && (
              <div
                className="flex flex-col bg-transparent  p-1 rounded-xl shadow absolute 
                            right-[2rem] top-16 mt-6 min-w-[170px] mobile-menu-bg  ">
              </div>
            )}
        </div>



      </div>
    </nav>
  );
}

export default Navbar;
