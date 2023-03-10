import React from "react";

const ReadMore = ({ setIsOpen, id, isOpen, isClose, setIsClose }) => {
  return (
    <button
      onClick={() => {
        setIsClose(!isClose);
        setIsOpen(id);
      }}
      className="read-more"
    >
      {isOpen === id && isClose ? "Close" : "View"}
    </button>
  );
};

export default ReadMore;
