import React from 'react';
import './Landingpage.css';

function Landingpage() {
  const sectionStyle = {
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
    position: 'relative',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  return (
    <section style={sectionStyle}>
      <img src="/images/Cover Page.png" alt="landing" style={imageStyle} />
      <div className="absolute top-1/2 left-[85%] transform -translate-x-2/3 -translate-y-1/2 text-start text-white">
        <h1 className="font-Poppins text-9xl font-bold leading-normal mb-[-30px]">Chefio.</h1>
        <h3 className="font-Poppins text-[24px] font-semibold leading-normal m-0 w-[500px]">The community that celebrates cooking</h3>
        <div className="flex justify-start gap-[40px] mt-[20px]">
          <button className="bn5 rounded-lg bg-[rgba(0,0,0,0.17)] px-10 py-4 text-white cursor-pointer font-semibold hover:bg-slate-600 hover:scale-105 transition duration-300 ease-in-out relative">Sign up</button>
          <button className="bn4 rounded-lg px-10 py-4 bg-white text-black cursor-pointer font-semibold hover:bg-zinc-300 hover:scale-105 hover:border-zinc-300 transition duration-300 ease-in-out relative">Sign in</button>
        </div>
      </div>
    </section>
  );
}

export default Landingpage;
