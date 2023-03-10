import React, { useState } from "react";

import Delete from "./Buttons/Delete";
import ReadMore from "./Buttons/ReadMore";
import Update from "./Buttons/Update";

const Task = ({ task }) => {
  const { title, id } = task;

  const [isOpen, setIsOpen] = useState(null);

  return (
    <div>
      <div id={id} className="item">
        <h3>{title}</h3>
        <div className="buttons-group">
          <ReadMore setIsOpen={setIsOpen} id={id} isOpen={isOpen} />
          <Update />
          <Delete />
        </div>
      </div>
      <div className={isOpen === id ? "dropDown open" : "dropDown"}>
        <h2>Full Name:</h2>
      </div>
    </div>
  );
};

export default Task;
