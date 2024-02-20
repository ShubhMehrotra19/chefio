import React, { useState } from 'react';
import { Textarea } from '@chakra-ui/react';

function LeaveReview() {
  const [active, setActive] = useState(true);

  function handleClick() {
    setActive(!active);
  }

  function handleImageClick(event) {
    if (!active) {
      handleClick();
    }
  }

  return (
    <div onClick={handleClick}>
      {active ? (
        <div className="w-40 h-12 bg-white rounded-xl border-2 border-indigo-500 cursor-pointer hover:border-indigo-600 hover:scale-105 hover:transition flex justify-center items-center">
          <div className="text-center text-indigo-500 text-base font-semibold font-['Poppins']">Leave a review?</div>
        </div>
      ) : (
        <div className='bg-white rounded-2xl flex flex-col'>
          <Textarea placeholder='We would love to hear from you!' />
          <div className='flex justify-end p-1'>
            <img className='h-8 w-8' src="/images/send_message.png" alt="send_message" onClick={handleImageClick} />
          </div>
        </div>
      )}
    </div>
  );
}

export default LeaveReview;
