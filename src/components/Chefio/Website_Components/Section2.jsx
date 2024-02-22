import React from 'react'

function Section2() {
    return (
        <div className='flex flex-col justify-center gap-4 w-full'>
        <div className="text-center text-black text-5xl font-medium font-['Poppins']">The Most user friendly Website for any age!</div>
        <img className='mb-10' src="/images/website/rendering image.png" alt="" />
        <div className='flex justify-between mx-20'>
            <div className=' flex flex-col justify-center items-center gap-4'>
            <div className="text-center text-black text-5xl font-semibold font-['Poppins']">50K</div>
            <div className="text-center text-black text-opacity-90 text-xl font-medium font-['Poppins']">Active Product Users</div>
            </div>
            <div className=' flex flex-col justify-center items-center gap-4'>
            <div className="text-center text-black text-5xl font-semibold font-['Poppins']">12K</div>
            <div className="text-center text-black text-opacity-90 text-xl font-medium font-['Poppins']">Dishes posted by Users</div>
            </div>
            <div className=' flex flex-col justify-center items-center gap-4'>
            <div className="text-center text-black text-5xl font-semibold font-['Poppins']">7K</div>
            <div className="text-center text-black text-opacity-90 text-xl font-medium font-['Poppins']">Premium Users</div>
            </div>
        </div>
        </div>
    )
}

export default Section2
