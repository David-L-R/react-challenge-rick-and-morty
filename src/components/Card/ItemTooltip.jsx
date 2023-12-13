import React from "react";
import { Tooltip } from "react-tooltip";

const ItemTooltip = ({ item }) => {
  return (
    <>
      <span data-tooltip-id={item.name}>{item.symbol}</span>
      <Tooltip id={item.name} place='bottom' content={item.name} />
    </>
  );
};

export default ItemTooltip;
