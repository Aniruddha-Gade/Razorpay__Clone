import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs';

const Button = ({ title }) => {
    return (
        <button className={`bg-lightBlue w-full lg:w-fit  text-white py-2 px-4 rounded-md flex gap-2 items-center justify-center
          hover:bg-lightBlue500 transition-all duration-200 font-bold`}>
            {title}
            <BsArrowRightShort className='w-[25px] h-[30px] ' />
        </button>
    )
}

export default Button