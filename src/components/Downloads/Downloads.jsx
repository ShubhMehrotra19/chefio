import React from 'react';
import './Downloads.css';

function Downloads() {
  return (
    <div className="flex items-start justify-between">
      <div className="mt-28 ml-20 flex flex-col justify-start items-center">
        <div className="text-center text-black text-3xl font-semibold font-['Lato']">march 2023 records</div>
        <div className="text-center text-black text-9xl font-semibold font-['Oswald']">12,860</div>
        <div className="text-center text-black text-4xl font-bold font-['Lato']">New dishes from our users</div>

        <div className='flex flex-col gap-4 justify-center items-center mt-12'>
        <a href="/" tabIndex="0"><img className="bn45" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="bn45"/></a>
        <a href="/" tabIndex="0"><img className="bn46" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"alt="bn45"/></a>
        </div>
      </div>
      <div className='mt-[17px]'>
      <img src="images/Download_page.png" alt="img" />
      </div>
    </div>
  );
}

export default Downloads;
