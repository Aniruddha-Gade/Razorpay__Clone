import React from 'react'

import { FeaturesSectionCard } from '../constants'


const Card = ({ title, desc, logo }) => (
  <div className=''>
    <img src={logo} alt={logo} />
    <p className='text-white text-lg font-bold my-4'>{title}</p>
    <p className='text-white opacity-80'>{desc}</p>
  </div>
)

const FeaturesSection = () => {
  return (
    <section className='w-full bg-[url(./assets/core-features-sectionBg.svg)] bg-no-repeat bg-cover bg-center relative py-36 '>

      <div className='relative w-11/12 max-w-[1080px] mx-auto pt-4 '>
        <h3 className='font-bold text-2xl lg:text-center text-white mt-14'>Features</h3>
        <div className="w-6 h-1 bg-greenLight lg:mx-auto mt-4 mb-6"></div>
        <p className='lg:text-center max-w-[450px] text-white lg:mx-auto'>
          Empower your business with all the right tools to accept online payments and provide the best customer experience
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2rem] mt-8'>
          {FeaturesSectionCard.map(card => (
            <Card key={card.id} title={card.title} desc={card.desc} logo={card.logo} />
          ))}
        </div>
      </div>

    </section>
  )
}

export default FeaturesSection