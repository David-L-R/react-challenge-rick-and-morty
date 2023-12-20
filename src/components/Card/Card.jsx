import React from "react";
import { Image } from "./Image";
import { Body } from "./Body";

const Card = ({ character, remove, removeFav, addFav, favorite }) => {
  const { full_name, super_powers, weaknesses } = character;

  return (
    <div className='card' key={character.full_name}>
      <Image
        fullName={full_name}
        removeFav={removeFav}
        addFav={addFav}
        favorite={favorite}
      />
      <Body
        fullName={full_name}
        superPowers={super_powers}
        weaknesses={weaknesses}
      />
      <div className='button-container'>
        <button className='secondary-button' onClick={() => remove(full_name)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default Card;
