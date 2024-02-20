import React from 'react'
import { NavLink } from 'react-router-dom'

function Aboutus() {
    return (
        <div className='flex justify-between items-start'>
            <div className='flex flex-col ml-20 mt-16'>
            <div className="text-black text-6xl font-bold font-serif capitalize mb-8">About Us</div>
            <div className="text-black text-xl font-normal font-['Poppins'] capitalize mb-12">Chefio is a kitchen companion app that helps users <br /> create healthy and delicious meals using the ingredients <br /> they have at home. With a user-friendly interface, Chefio <br /> generates a list of recipes based on the food items <br /> entered by the user. It offers a food loving community to <br /> its users where they can post their dishes and gain a <br /> following. Chefio is perfect for novice and experienced <br /> cooks alike, and is a great tool for planning Healthy meals.<br/>Join us and get popular with your dishes.</div>
            <div className='flex gap-10 justify-start items-center'>
           <NavLink to="/pricing"><div className="w-40 h-12 flex justify-center items-center bg-indigo-500 cursor-pointer hover:bg-indigo-600 hover:scale-105 hover:transition rounded-xl"><div className="text-white text-base font-semibold font-['Poppins']">View Pricings?</div></div>
            </NavLink>
            <div className="w-40 h-12 bg-white rounded-xl border-2 border-indigo-500 cursor-pointer hover:border-indigo-600 hover:scale-105 hover:transition flex justify-center items-center"><div className="text-center text-indigo-500 text-base font-semibold font-['Poppins']">Leave a review?</div></div>
            </div>
            </div>
                <img className='z-10 mt-[-60px]' src="/images/aboutUs.png" alt="img" />
        </div>
    )
}

export default Aboutus
