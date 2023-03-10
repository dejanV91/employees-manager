import React from "react";
import ButtonsGroup from "./Buttons/ButtonsGroup";

const Item = ({ name }) => {
  return (
    <div>
      <div className="item open">
        <h3>{name}</h3>
        <ButtonsGroup></ButtonsGroup>
      </div>
      <div className="dropDown">
        <h2>Full Name:</h2>
      </div>
    </div>
  );
};

export default Item;
