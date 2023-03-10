import React from "react";

const ReadMore = ({ toggleOpen }) => {
  return (
    <button onClick={toggleOpen} className="read-more">
      View
    </button>
  );
};

export default ReadMore;
