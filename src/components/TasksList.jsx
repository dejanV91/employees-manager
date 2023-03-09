import React from "react";
import CreateEmployee from "./CreateEmployee";
import Employee from "./Employee";

const TasksList = () => {
  return (
    <div className="employees-container">
      <CreateEmployee></CreateEmployee>
      <Employee></Employee>
    </div>
  );
};

export default TasksList;
