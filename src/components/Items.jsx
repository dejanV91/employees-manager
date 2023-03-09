import React from "react";
import Item from "./Item";
import Create from "./Create";

const Items = () => {
  return (
    <div className="container">
      <Create></Create>
      <Item></Item>
      <Item></Item>
      <Item></Item>
    </div>
  );
};

export default Items;
