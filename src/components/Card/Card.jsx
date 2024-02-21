import React from 'react';

function Card({ profile, Pname, rating, review, position = { top: '0%', left: '0%' } }) {
  const cardStyle = {
    position: 'absolute',
    top: position.top,
    left: position.left,
  };

  return (
    <div style={cardStyle} className='p-6 flex-col bg-white max-w-80 rounded-sm items-start shadow-xl'>
      <div className='upper-part flex items-center gap-4 mb-3'>
        <img className='rounded-full w-12 h-12 object-cover' src={profile} alt="img" />
        <div className='flex flex-col items-start'>
          <p className="text-center text-black text-xl font-bold font-['Poppins']">{Pname}</p>
          <p className="text-center text-black text-base font-semibold font-['Poppins']">🔥{rating}</p>
        </div>
      </div>
      <div className='lower-part'>
        <p className="text-black text-base font-normal font-['Poppins']">
          {review}
        </p>
      </div>
    </div>
  );
}

export default Card;
