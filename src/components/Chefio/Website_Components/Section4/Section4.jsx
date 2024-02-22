import React from 'react'
import { NavLink } from 'react-router-dom'

function Section4() {
    return (
        <div className='items-center mb-12 flex flex-col justify-center'>
            <img src="/images/website/queries.png" alt="" />
            <NavLink to="/contact">
            <div className=" -mt-64 px-10 py-3 h-fit w-fit bg-indigo-500 hover:bg-indigo-600 text-white rounded-md font-['Poppins'] text-xl font-normal">Have a Query? Contact us!</div>
            </NavLink>
        </div>
    )
}

export default Section4
