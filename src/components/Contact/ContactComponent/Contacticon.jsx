import React, { useState, useEffect, useRef } from 'react';

function Contacticon() {
  const [active, setActive] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target) && !event.target.classList.contains('expanded-area')) {
        setActive(true); // Clicked outside, so activate the original div
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [containerRef]);

  function handleExpandClick() {
    setActive(false); 
  }

  return (
    <div ref={containerRef}>
      <div onClick={handleExpandClick} className={`cursor-pointer ${active ? 'expanded-area' : ''}`}>
        {active ? (
          <div className="flex justify-center items-center w-16 h-16 bg-indigo-500 hover:scale-105 transition rounded-full">
            <img className='h-[35px] w-[35px] z-10' src="/images/icons8-message-50.png" alt="speech-bubble--v2"/>
          </div>
        ) : (
          <div className="flex items-center w-fit px-8 h-16 bg-indigo-500 rounded-full">
            <div className='flex justify-evenly items-center gap-5'>
              <img className='h-[35px] w-[35px] z-10 hover:scale-105 hover:shadow' src="/images/icons8-male-user-50.png" alt="types1" />
              <img className='h-[35px] w-[35px] z-10 hover:scale-105 hover:shadow' src="/images/icons8-email-50.png" alt="types2" />
              <img className='h-[35px] w-[35px] z-10 hover:scale-105 hover:shadow' src="/images/icons8-phone-50.png" alt="types3" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contacticon;
