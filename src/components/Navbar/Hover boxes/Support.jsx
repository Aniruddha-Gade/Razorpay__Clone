import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';

const SupportItem = ({ title }) => (
    <div className='group'>
        <p className='hidden group-hover:block h-full w-2'></p>
        <p className=' '>{title}</p>
        <IoIosArrowForward  className='hidden group-hover:block '/>
    </div>
)

const Support = () => {
    return (
        <div className="absolute top-7 left-[-100%]  bg-white w-[13rem] p-3 flex flex-col justify-between rounded-lg 
            shadow-md z-[100] transition-all duration-500">
            <p>GET SUPPORT</p>

            <div>
                <SupportItem title={'Raise a request'} />
                <SupportItem title={'Knowledgebase'} />
                <SupportItem title={'Chargeback Guides'} />
                <SupportItem title={'Settlement Guides'} />
            </div>

        </div>
    )
}

export default Support

