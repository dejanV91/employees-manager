import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="container-buttons">
        <Link to={"/"}>
          <Button name={"EMPLOYEES"}></Button>
        </Link>
        <Link to={"/tasks"}>
          <Button name={"TASKS"}></Button>
        </Link>
        <Link to={"/salaries"}>
          <Button name={"TOP 5 "}></Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
