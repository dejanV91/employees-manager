import React from "react";
import { useGlobalContext } from "../../Context/context";
const ReadMore = () => {
  const { handleToggle } = useGlobalContext();
  return (
    <button onClick={(e) => handleToggle(e)} className="read-more">
      View
    </button>
  );
};

export default ReadMore;
