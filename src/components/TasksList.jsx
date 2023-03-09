import React from "react";
import Create from "./Create";
import Item from "./Item";

const TasksList = () => {
  return (
    <div className="container">
      <Create task={"Task"}></Create>
      <Item name={"Developer"}></Item>
      <Item name={"Frontend"}></Item>
      <Item name={"DevOps"}></Item>
      <Item name={"Backand"}></Item>
    </div>
  );
};

export default TasksList;
