import React from "react";
import ItemTooltip from "../Card/ItemTooltip";

export const ItemContainer = ({ children, items }) => {
  return (
    <>
      <h3>{children}</h3>
      <div className='power-container'>
        {items.map((power) => (
          <ItemTooltip item={power} />
        ))}
      </div>
    </>
  );
};
