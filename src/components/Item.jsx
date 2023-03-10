import React, { useState } from "react";
import ButtonsGroup from "./Buttons/ButtonsGroup";

const toggleOpen = (e) => {
  console.log(e.currentTarget);
};

const Item = ({ name }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="item open">
        <h3>{name}</h3>
        <ButtonsGroup toggleOpen={toggleOpen}></ButtonsGroup>
      </div>
      <div className="dropDown">
        <h2>Full Name:</h2>
      </div>
    </div>
  );
};

export default Item;
