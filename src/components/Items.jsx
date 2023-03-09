import React from "react";
import Item from "./Item";
import Create from "./Create";

const Items = () => {
  return (
    <div className="container">
      <Create task={"Employee"}></Create>
      <Item name={"Dejan Vukoicic"}></Item>
      <Item name={"Jovana Kraljevic"}></Item>
      <Item name={"Niko Kovac"}></Item>
    </div>
  );
};

export default Items;
