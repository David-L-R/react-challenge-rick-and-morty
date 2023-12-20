import React from "react";

export const Image = ({ fullName, addFav, removeFav, favorite }) => {
  console.log(fullName, favorite);
  return (
    <div className='image-container'>
      <img src={`images/${fullName}.jpeg`} className='cardImage' alt='' />
      <button
        className='icon-button'
        onClick={() => (favorite ? removeFav(fullName) : addFav(fullName))}
      >
        {favorite ? (
          <img src='/icons/heart-fill.png' alt='heart-fill' />
        ) : (
          <img src='/icons/heart-empty.png' alt='heart-empty' />
        )}
      </button>
    </div>
  );
};
