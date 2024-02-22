import React from 'react'
import Section1 from './Website_Components/Section1'
import Section2 from './Website_Components/Section2'
import Section3 from './Website_Components/Section3'
import Section4 from './Website_Components/Section4/Section4'
import Section5 from './Website_Components/Section5'
import Footer from './Website_Components/Footbar'

function Chefio() {
    return (
        <div className='flex flex-col justify-center scroll-smooth'>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Footer />
        </div>
    )
}

export default Chefio
