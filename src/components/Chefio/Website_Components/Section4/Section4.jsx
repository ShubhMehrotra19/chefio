import React from 'react'
import { NavLink } from 'react-router-dom'
import SpotlightButton from './SpotlightButton'

function Section4() {
    return (
        <div className='items-center mb-6 flex flex-col justify-center'>
            <img src="/images/website/queries.png" alt="" />
            <NavLink to="/contact">
                <div className='-mt-64 mb-3'><SpotlightButton /></div>
            </NavLink>
        </div>
    )
}

export default Section4
