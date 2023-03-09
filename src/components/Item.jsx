import React from "react";
import ButtonsGroup from "./Buttons/ButtonsGroup";

const Item = ({ name }) => {
  return (
    <div className="item">
      <h3>{name}</h3>
      <ButtonsGroup></ButtonsGroup>
    </div>
  );
};

export default Item;
