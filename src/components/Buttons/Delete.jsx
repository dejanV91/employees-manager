import React from "react";
import { useGlobalContext } from "../../Context/context";

const Delete = ({ id, url, name }) => {
  const { deleteItem } = useGlobalContext();
  return (
    <button onClick={() => deleteItem(id, url, name)} className="delete-btn">
      Delete
    </button>
  );
};

export default Delete;
