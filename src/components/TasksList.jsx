import React from "react";
import Create from "./Create";
import Item from "./Item";

const TasksList = () => {
  return (
    <div className="container">
      <Create></Create>
      <Item></Item>
    </div>
  );
};

export default TasksList;