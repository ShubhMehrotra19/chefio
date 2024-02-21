import React, { useState } from 'react';
import ListItem from './ListItem'; // Adjust the path based on your project structure

function RecipeIngredients() {
  const [selectedSet, setSelectedSet] = useState(0);

  const ingredientsData = [
    [
      { iconSrc: '/images/icons/tomato.png', label: 'cherry tomato x3' },
      { iconSrc: '/images/icons/basil.png', label: 'basil leaves x4' },
      { iconSrc: '/images/icons/salt.png', label: 'salt to taste' },
      { iconSrc: '/images/icons/cheese.png', label: 'parmesan cheese' },
    ],
    [
      { iconSrc: '/images/icons/tomato.png', label: 'cherry tomato x3' },
      { iconSrc: '/images/icons/basil.png', label: 'basil leaves x4' },
      { iconSrc: '/images/icons/salt.png', label: 'salt to taste' },
      { iconSrc: '/images/icons/cheese.png', label: 'parmesan cheese' },
    ],
    // Add more sets as needed
  ];

  const handleSetChange = (index) => {
    setSelectedSet(index);
  };

  return (
    <div className="flex">
      <div>
        {ingredientsData[selectedSet].map((item, subIndex) => (
          <ListItem key={subIndex} {...item} />
        ))}
      </div>
      <div className="flex flex-col">
        {ingredientsData.map((set, index) => (
          <button key={index} onClick={() => handleSetChange(index)}>
            Ingredients Set {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default RecipeIngredients;
