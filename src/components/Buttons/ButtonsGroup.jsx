import React from "react";
import Delete from "./Delete";
import ReadMore from "./ReadMore";
import Update from "./Update";

const ButtonsGroup = () => {
  return (
    <div className="buttons-group">
      <ReadMore></ReadMore>
      <Update></Update>
      <Delete></Delete>
    </div>
  );
};

export default ButtonsGroup;
