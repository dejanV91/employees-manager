import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <div className="header">
      <div className="container-buttons">
        <Button name={"EMPLOYEES"}></Button>
        <Button name={"TASKA"}></Button>
        <Button name={"TOP 5 EMPLOYESS"}></Button>
      </div>
    </div>
  );
};

export default Header;
