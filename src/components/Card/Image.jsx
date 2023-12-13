import React from "react";

export const Image = ({ fullName }) => {
  return (
    <div className='image-container'>
      <img src={`images/${fullName}.jpeg`} className='cardImage' alt='' />
      <button className='icon-button'>
        <img src='/icons/heart-empty.png' alt='heart-empty' />
      </button>
    </div>
  );
};
