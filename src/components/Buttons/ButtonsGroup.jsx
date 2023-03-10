import React from "react";
import Delete from "./Delete";
import ReadMore from "./ReadMore";
import Update from "./Update";

const ButtonsGroup = ({ toggleOpen }) => {
  return (
    <div className="buttons-group">
      <ReadMore toggleOpen={toggleOpen}></ReadMore>
      <Update></Update>
      <Delete></Delete>
    </div>
  );
};

export default ButtonsGroup;
