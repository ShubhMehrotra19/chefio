import React, { useState, useEffect, useRef } from 'react';
import { Textarea } from '@chakra-ui/react';
import Swal from 'sweetalert2';

function LeaveReview() {
  const [active, setActive] = useState(true);
  const [reviewSent, setReviewSent] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setActive(true);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [containerRef]);

  const customAlert = () => {
    Swal.fire({
        text: 'Thank you for your review!',
        timer: 1500,
        showConfirmButton: false, 
        background: '#dadada',
        customClass: {
          content: '#ffffff',
        },
      });
  };

  function handleButtonClick() {
    if (!reviewSent) {
      setActive(!active);
    }
  }

  function handleImageClick() {
    if (!reviewSent) {
      setReviewSent(true);
      customAlert();
      setTimeout(() => {
        setReviewSent(false);
        setActive(true);
      }, 300);
    }
  }

  return (
    <div ref={containerRef}>
      {active ? (
        <div
          className="w-40 h-12 bg-white rounded-xl border-2 border-indigo-500 cursor-pointer hover:border-indigo-600 hover:scale-105 hover:transition flex justify-center items-center"
          onClick={handleButtonClick}
        >
          <div className="text-center text-indigo-500 text-base font-semibold font-['Poppins']">
            Leave a review?
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-2xl flex flex-col">
          <Textarea className="w-56 placeholder:text-sm" placeholder="We would love to hear from you!" />
          <div className="flex justify-end p-1">
            <img
              className=" cursor-pointer hover:scale-105 hover:shadow h-8 w-8"
              src="/images/send_message.png"
              alt="send_message"
              onClick={handleImageClick}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default LeaveReview;
