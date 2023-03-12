import React, { useState } from "react";

import Delete from "./Buttons/Delete";
import ReadMore from "./Buttons/ReadMore";
import Update from "./Buttons/Update";

const Item = ({ employee, url }) => {
  const { full_name, id } = employee;

  const [isClose, setIsClose] = useState(false);
  const [isOpen, setIsOpen] = useState(null);

  return (
    <div>
      <div id={id} className="item">
        <h3>{full_name}</h3>
        <div className="buttons-group">
          <ReadMore
            setIsOpen={setIsOpen}
            id={id}
            isOpen={isOpen}
            setIsClose={setIsClose}
            isClose={isClose}
          />
          <Update url={url} id={id} />
          <Delete id={id} url={"/users/"} name={"employees"} />
        </div>
      </div>
      <div className={isOpen === id && isClose ? "dropDown open" : "dropDown"}>
        <h2>Full Name:</h2>
      </div>
    </div>
  );
};

export default Item;
