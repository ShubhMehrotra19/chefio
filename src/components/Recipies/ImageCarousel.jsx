import React from 'react'
import { useState } from 'react';

function ImageCarousel() {
    
    const images = ['/images/food/image4.png', '/images/food/image5.png', '/images/food/image1.png', '/images/food/image2.png', '/images/food/image3.png'];

    // Use state to track the current index
  const [num, setNum] = useState(2);

  // Function to handle image click
  const handleClick = (num1) => {
    setTimeout(() => {
    setNum(num1);
    console.log(num1);
    }, 150);
  };
    return (
        <>
        <div onClick={() => handleClick(num - 2)} className='h-48 w-56 bg-indigo-300 bg-opacity-80 rounded-md'><div className='blur-sm h-full w-full flex justify-center items-center scale-75 hover:blur-none transition ease-in delay-150 hover:scale-90 hover:rotate-6'>
            <img src={images[(num-2) > 0 ? (num-2) % 5 : (num-2) < 0 ? (images.length + (num - 2)) % 5 : (num-2)]} />
            </div></div>

        <div onClick={() => handleClick(num - 1)} className='h-56 w-64 bg-indigo-400 bg-opacity-70 rounded-md'><div className='blur-sm h-full w-full flex justify-center items-center scale-90 hover:blur-none transition ease-in delay-150 hover:scale-95 hover:rotate-6'>
            <img src={images[(num-1) > 0 ? (num-1) % 5 : (num-1) < 0 ? (images.length + (num-1)) % 5 : (num-1)]} />
            </div></div>

        <div className='h-60 w-72 bg-indigo-500 bg-opacity-70 rounded-md' style={{ boxShadow: '0 0 15px rgba(0, 0, 255, 0.5)' }}><div className='h-full w-full flex justify-center items-center scale-95 hover:scale-100 transition ease-in delay-150 hover:rotate-6'>
            <img src={images[(num) > 0 ? (num) % 5 : (num) < 0 ? (images.length + (num)) % 5 : (num)]} />
            </div></div>

        <div onClick={() => handleClick(num + 1)} className='h-56 w-64 bg-indigo-400 bg-opacity-70 rounded-md'><div className='blur-[2px] h-full w-full flex justify-center items-center scale-90 hover:blur-none transition ease-in delay-150 hover:scale-95 hover:rotate-6'>
            <img src={images[(num+1) > 0 ? (num+1) % 5 : (num+1) < 0 ? (images.length + (num + 1)) % 5 : (num+1)]} />
            </div></div>

        <div onClick={() => handleClick(num + 2)} className='h-48 w-56 bg-indigo-300 bg-opacity-80 rounded-md'><div className='blur-sm h-full w-full flex justify-center items-center scale-75 hover:blur-none transition ease-in delay-150 hover:scale-90 hover:rotate-6'>
            <img src={images[(num+2) > 0 ? (num+2) % 5 : (num+2) < 0 ? (images.length + (num+2)) % 5 : (num+2)]} />
            </div></div>
        </>
    )
}

export default ImageCarousel
