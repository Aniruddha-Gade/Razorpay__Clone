import React from 'react'
import Button from './Button'
import company from '../assets/comanies.png'

const JoinUsSection = () => {
  return (
    <section className='bg-[#f5f8fe] relative pt-40 pb-12 -mt-[200px] -z-[100]'>

      <div className='w-11/12 max-w-[1080px] relative mx-auto flex flex-col sm:flex-row '>
        <div className='  max-w-[450px] sm:my-16'>
          <h3 className='font-extrabold text-2xl text-deepBlueHead'>Join the 50,00,000 businesses using Razorpay</h3>
          <div className="w-6 h-1 bg-greenLight my-4 mb-10"></div>

          <p className='opacity-80 '>
            We make it easier for you to focus on building great products while we work on simplifying your payments.
            Become one of us by joining thousands of our happy users and simplify the online payment experience for your customers.
          </p>

          <p className='opacity-80 my-6'>Focus on your business while we handle the complexities of payments for you.</p>

          <Button title={'Get Started'} />
        </div>



        <div className="h-[500px] w-full sm:w-[500px] relative overflow-y-hidden mx-auto ">
          <div style={{ background: 'linear-gradient(180deg, #f4f8ff, #fff0)' }} className="absolute w-full h-[150px] top-0 z-50"></div>
          <img src={company} alt={company} className="absolute h-auto object-contain companiesList " />
          <div style={{ background: 'linear-gradient(0deg, #f4f8ff, #fff0)' }} className="absolute w-full h-[150px] bottom-0 z-50"></div>
        </div>

      </div>
    </section>
  )
}

export default JoinUsSection


