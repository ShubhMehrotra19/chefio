import React, { useState } from 'react';
import Card from '../Card/Card';
import ImageCarousel from './ImageCarousel';
import { NavLink, useNavigate } from 'react-router-dom';
import Description from './RecipieDescription/Description';

function Recipies() {
  const cardData = [
    {
        key: 0,
        profile: 'https://images.pexels.com/photos/4057693/pexels-photo-4057693.jpeg?auto=compress&cs=tinysrgb&w=600',
        Pname: 'Alexandra Hue',
        rating: '4.6',
        review: 'As a Granny, I love it when my grandkids eat my dishes. This dish made them lick their fingers :) haha.',
        position: { top: '30%', left: '28%' },
    },
    {
        key: 1,
        profile: 'https://images.pexels.com/photos/6937744/pexels-photo-6937744.jpeg?auto=compress&cs=tinysrgb&w=600',
        Pname: 'Rehman Afiz',
        rating: '4.2',
        review: 'The grilled salmon and asparagus were cooked to perfection, making for a healthy and delicious meal.',
        position: { top: '30%', left: '28%' },
      },
      {
        key: 2,
        profile: 'https://images.pexels.com/photos/2024901/pexels-photo-2024901.jpeg?auto=compress&cs=tinysrgb&w=600',
        Pname: 'Alex Alewood',
        rating: '4.0',
        review: 'Since I do overnight shifts for my company, sometimes I have to eat noodles to get through. This simple dish made me fall in love with Chefio.',
        position: { top: '30%', left: '28%' },
      },
      {
        key: 3,
        profile: 'https://images.pexels.com/photos/15335320/pexels-photo-15335320/free-photo-of-muscular-man-in-a-tank-top-wiping-his-head-from-sweat-with-a-towel.jpeg?auto=compress&cs=tinysrgb&w=600',
        Pname: 'David Coppler',
        rating: '4.2',
        review: 'Everyone loves a healthy salad and so do I. It is that one dish that fills me up after an extensive gym session.',
        position: { top: '30%', left: '28%' },
      },
      {
        key: 4,
        profile: 'https://images.pexels.com/photos/7020290/pexels-photo-7020290.jpeg?auto=compress&cs=tinysrgb&w=600',
        Pname: 'Armano Porter',
        rating: '4.2',
        review: 'I am a retired chef and the one thing I love the most about this dish is about its versatility and great taste.',
        position: { top: '30%', left: '28%' },
      },
  ];

  const ingredientsData = [
    [
        { iconSrc: '/images/icons/beetroot.png', label: 'Beetroot x1 roasted+diced' },
        { iconSrc: '/images/icons/spinach.png', label: 'chopped spinach x2 cups' },
        { iconSrc: '/images/icons/salt.png', label: 'salt (to taste)' },
        { iconSrc: '/images/icons/leeks.png', label: 'leeks, white parts' },
        { iconSrc: '/images/icons/pine_nuts.png', label: 'pine nuts x1/4 cups' },
      ],
      [
        { iconSrc: '/images/icons/salmon.png', label: 'salmon fillets x4' },
        { iconSrc: '/images/icons/asparagus.png', label: 'asparagus, tough ends removed' },
        { iconSrc: '/images/icons/salt.png', label: 'salt (to taste)' },
        { iconSrc: '/images/icons/lemon.png', label: 'lemon sliced' },
      ],
       [
        { iconSrc: '/images/icons/tomato.png', label: 'cherry tomato x3' },
        { iconSrc: '/images/icons/basil.png', label: 'basil leaves x4' },
        { iconSrc: '/images/icons/salt.png', label: 'salt to taste' },
        { iconSrc: '/images/icons/cheese.png', label: 'parmesan cheese' },
       ],
      [
        { iconSrc: '/images/icons/beetroot.png', label: 'Beetroot x1 roasted+diced' },
        { iconSrc: '/images/icons/spinach.png', label: 'chopped spinach x2 cups' },
        { iconSrc: '/images/icons/salt.png', label: 'salt (to taste)' },
        { iconSrc: '/images/icons/quiona.png', label: 'Quinoa x1 cup' },
       ],
       [
        { iconSrc: '/images/icons/black_beans.png', label: 'black beans x1 pound' },
        { iconSrc: '/images/icons/pork_shoulder.png', label: 'pork shoulder, in cubes' },
        { iconSrc: '/images/icons/salt.png', label: 'salt (to taste)' },
        { iconSrc: '/images/icons/large_onion.png', label: 'large onion, chopped' },
        { iconSrc: '/images/icons/bay_leaves.png', label: 'bay leaves x2' },
      ]
  ];

  const images = ['/images/food/image4.png', '/images/food/image5.png', '/images/food/image1.png', '/images/food/image2.png', '/images/food/image3.png'];
  const title =['Grilled Halibut with Spinach', 'grilled salmon and herbs', 'Basil-Tomato Penne pasta', 'Quinoa salad with beetroot', 'Brazilian food dish Feijoada'];
  
  const [selectedImageIndex, setSelectedImageIndex] = useState(2);

  
  const handleValueChange = (value) => {
    setSelectedImageIndex(value);
  };

  //I used this to make the code a little cleaner.
  let value =  (selectedImageIndex) > 0 ? (selectedImageIndex) % 5 : (selectedImageIndex) < 0 ? (images.length + (selectedImageIndex)) % 5 : (selectedImageIndex);
  const selectedCard = cardData.find(card => card.key === value);

  const selectedSubarray = ingredientsData[value] || [];

  const navigate = useNavigate();

  const handleNavigation = () => {
    // Use React Router to navigate to the Description page with the 'value' parameter
    navigate(`/recipes/${title[value].toLowerCase().replace(/\s+/g, '-')}`, { state: { value } });
  };
  return (
    <div className='flex flex-col overflow-hidden'>
      <div className='flex'>
        <div className='ml-16 mt-16 flex flex-col justify-start'>
          <div className="w-80 mb-3 text-black text-6xl font-bold font-serif capitalize">Recipes</div>
          <div className="text-black text-xl font-medium font-['Poppins'] mb-4">
            Want to try making this dish on <br /> your own? What are you <br /> waiting for then?
          </div>

         <div
        className="bg-indigo-500 hover:bg-indigo-600 hover:scale-105 cursor-pointer transition 150 ease-in-out rounded-md py-2 px-4 w-fit h-fit text-center text-white text-md font-medium font-['Poppins']"
        onClick={handleNavigation}
      >Let’s Go!</div>


          </div>
        <div className="mt-12 ml-12 h-fit max-w-96 py-5 px-3 relative bg-zinc-300 bg-opacity-40 shadow-xl z-10">
          <div className=" text-left text-slate-800 text-2xl font-semibold font-['Poppins']">{title[value]}</div>
        </div>
          <div className=' z-10'>
          <Card {...selectedCard} />
          </div>
          <div className='scale-[65%] -ml-40 -mt-10'>
            <img src={images[value]} alt="img" />
          </div>
          
          <div className='z-20 -ml-20 mt-16'>
          <div className="w-60 max-h-80 h-fit p-5 bg-white flex flex-col justify-start shadow-xl">
          <div className="text-black text-xl font-semibold font-['Poppins'] mb-5">Ingredients</div>
          {selectedSubarray.map((item, index) => (
        <div key={index} className='flex justify-start items-center py-2 gap-1'>
          <img src={item.iconSrc} alt={item.label} />
          <div className="text-black text-base font-normal font-['Poppins']">{item.label}</div>
        </div>
         ))}
          </div>
          </div>

      </div>
      <div className='flex justify-between items-end relative -mt-6'>
      <ImageCarousel onValueChange={handleValueChange} selectedImageIndex={selectedImageIndex} />
      </div>
      <div className='hidden'><Description value={value} /></div>
    </div>
  );
}

export default Recipies;