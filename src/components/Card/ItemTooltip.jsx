import React from "react";
import { Tooltip } from "react-tooltip";

const ItemTooltip = ({ item }) => {
  return (
    <div key={item.name}>
      <span data-tooltip-id={item.name}>{item.symbol}</span>
      <Tooltip id={item.name} place='bottom' content={item.name} />
    </div>
  );
};

export default ItemTooltip;
