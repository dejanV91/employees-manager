import React from "react";

const Create = ({ task }) => {
  return (
    <div>
      <button className="create-btn"> Create {task}</button>
    </div>
  );
};

export default Create;
