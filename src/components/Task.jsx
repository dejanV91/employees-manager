import React, { useState } from "react";

import Delete from "./Buttons/Delete";
import ReadMore from "./Buttons/ReadMore";
import Update from "./Buttons/Update";

const Task = ({ task }) => {
  const { title, id } = task;

  const [isClose, setIsClose] = useState(false);
  const [isOpen, setIsOpen] = useState(null);

  return (
    <div>
      <div id={id} className="item">
        <h3>{title}</h3>
        <div className="buttons-group">
          <ReadMore
            setIsOpen={setIsOpen}
            id={id}
            isOpen={isOpen}
            setIsClose={setIsClose}
            isClose={isClose}
          />
          <Update />
          <Delete id={id} url={"/posts/"} name={"tasks"} />
        </div>
      </div>
      <div className={isOpen === id && isClose ? "dropDown open" : "dropDown"}>
        <h2>Full Name:</h2>
      </div>
    </div>
  );
};

export default Task;
