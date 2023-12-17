import React from "react";
import { Image } from "./Image";
import { Body } from "./Body";

const Card = ({ character }) => {
  const { full_name, super_powers, weaknesses } = character;

  return (
    <div className='card' key={character.full_name}>
      <Image fullName={full_name} />
      <Body
        fullName={full_name}
        superPowers={super_powers}
        weaknesses={weaknesses}
      />
      <div className='button-container'>
        <button className='secondary-button'>Remove</button>
      </div>
    </div>
  );
};

export default Card;
