import React from "react";
import Item from "./Item";
import Create from "./Create";
import { useGlobalContext } from "../Context/context";

const Items = () => {
  const { employees } = useGlobalContext();

  return (
    <div className="container">
      <Create task={"Employee"} />
      {employees?.map((item) => {
        return <Item key={item.id} id={item.id} item={item} />;
      })}
    </div>
  );
};

export default Items;
