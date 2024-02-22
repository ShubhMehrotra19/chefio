import { React, useState } from 'react';
import Card from '../Card/Card';
import RecipeIngredients from './RecipeIngredients';
import ImageCarousel from './ImageCarousel';

function Recipies() {
  const cardData = [
    {
      profile: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=600',
      Pname: 'Alex Alewood',
      rating: '4.0',
      review: 'Since I do overnight shifts for my company, sometimes I have to eat noodles to get through. This simple dish made me fall in love with Chefio.',
      position: { top: '30%', left: '28%' },
    },
  ];

  const images = ['/images/food/image4.png', '/images/food/image5.png', '/images/food/image1.png', '/images/food/image2.png', '/images/food/image3.png'];


  return (
    <div className='flex flex-col overflow-hidden'>
      <div className='flex'>
        <div className='ml-16 mt-16 flex flex-col justify-start'>
          <div className="w-80 mb-3 text-black text-6xl font-bold font-serif capitalize">Recipes</div>
          <div className="text-black text-xl font-medium font-['Poppins'] mb-4">
            Want to try making this dish on <br /> your own? What are you <br /> waiting for then?
          </div>
          <div className="bg-indigo-500 hover:bg-indigo-600 hover:scale-105 cursor-pointer transition 150 ease-in-out rounded-md py-2 px-4 w-fit h-fit text-center text-white text-md font-medium font-['Poppins']">Let’s Go!</div>
        </div>
        <div className="mt-12 ml-12 h-fit w-fit py-5 px-3 relative bg-zinc-300 bg-opacity-40 shadow-xl z-10">
          <div className="text-center text-slate-800 text-2xl font-semibold font-['Poppins']">Basil-Tomato Penne pasta</div>
        </div>
          <div className=' z-10'>
          {cardData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
          </div>
          <div className='scale-[65%] -ml-40 -mt-10'><img src="/images/food/image1.png" alt="img" /></div>
          
          <div className='z-20 -ml-20 mt-16'>
          <div className="w-60 max-h-80 h-fit p-5 bg-white flex flex-col justify-start shadow-xl">
          <div className="text-black text-xl font-semibold font-['Poppins'] mb-5">Ingredients</div>
            <RecipeIngredients />
          </div>
          </div>

      </div>
      <div className='flex justify-between items-end relative -mt-6'>
        <ImageCarousel />
      </div>
    </div>
  );
}

export default Recipies;