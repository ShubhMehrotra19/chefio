import React from 'react'
import PricingCard from './PricingCard'
import { NavLink } from 'react-router-dom'

function Pricing() {
    const cardValues = [
        {
            isBasic: true,
            plan: 'Basic',
            price: '0',
            point1: '2 Uploads per week',
            point2: 'Basic content support',
            point3: 'Email support',
            point4: 'Help center access',
            point5: 'Premium content reach restricted',
            point6: 'Prioirty email support restricted',
            point7: 'Premium recipies access restricted'
        },
        {
            isBasic: false,
            plan: 'Pro',
            price: '15',
            point1: 'Unlimited uploads',
            point2: 'Premium content support',
            point3: 'Email support',
            point4: 'Help center access',
            point5: 'Premium content reach',
            point6: 'Prioirty email support',
            point7: 'Premium recipies access'
        },
    ]
    
  return (
    <section className='inset-0 bg-opacity-75 backdrop-filter backdrop-blur-md relative'>
        <NavLink to="/about">
        <div className='absolute top-5 right-5'>
            <div className=' bg-indigo-500 hover:bg-indigo-600 hover:scale-105 cursor-pointer rounded-full h-8 w-8 text-center font-semibold text-xl text-white'>x</div>
        </div>
        </NavLink>
      <div className='flex gap-16 justify-center pt-16 z-20'>
        {cardValues.map((card, index) => (
          <PricingCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
}

export default Pricing;
