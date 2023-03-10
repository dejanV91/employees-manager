import React from "react";

const ReadMore = ({ setIsOpen, id, isOpen }) => {
  return (
    <button onClick={() => setIsOpen(id)} className="read-more">
      {isOpen === id ? "Close" : "View"}
    </button>
  );
};

export default ReadMore;
