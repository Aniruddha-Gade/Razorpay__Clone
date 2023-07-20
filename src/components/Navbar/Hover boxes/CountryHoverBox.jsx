import React from 'react'
import IndiaFlag from '../../../assets/india-flag.svg'
import MalaysiaFlag from '../../../assets/malaysian-flag.svg'


const CountryHoverBox = () => {
    return (
        <div className="absolute top-7 left-[-100%]  bg-white w-[13rem] p-3 flex flex-col justify-between rounded-lg 
          shadow-md z-[100] transition-all duration-500 ">
            <div className="flex justify-between items-center gap-2 hover:bg-blue-100 p-3 transition-all duration-200">
                <div className='flex gap-2'>
                    <img src={IndiaFlag} alt="India Flag" className="w-6 h-6" />
                    <span>India</span>
                </div>
                <span>IN</span>
            </div>

            <div className="flex justify-between items-center gap-2 hover:bg-blue-100 p-3 transition-all duration-200">
                <div className='flex gap-2'>
                    <img src={MalaysiaFlag} alt="India Flag" className="w-6 h-6" />
                    <span>Malaysia</span>
                </div>
                <span>MY</span>
            </div>
        </div>

        
    );
};

export default CountryHoverBox