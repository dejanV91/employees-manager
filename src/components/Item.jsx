import React from "react";

import Delete from "./Buttons/Delete";
import ReadMore from "./Buttons/ReadMore";
import Update from "./Buttons/Update";

const Item = ({ name }) => {
  return (
    <div>
      <div className="item">
        <h3>{name}</h3>
        <div className="buttons-group">
          <ReadMore />
          <Update />
          <Delete />
        </div>
      </div>
      <div className="dropDown">
        <h2>Full Name:</h2>
      </div>
    </div>
  );
};

export default Item;
