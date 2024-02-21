import React from 'react';

const ListItem = ({ iconSrc, label }) => (
  <div className='flex justify-start items-center py-2 gap-1'>
    <img src={iconSrc} alt={label} />
    <div className="text-black text-base font-normal font-['Poppins']">{label}</div>
  </div>
);

export default ListItem;
