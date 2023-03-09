import React from "react";
import Employee from "./Employee";
import CreateEmployee from "./CreateEmployee";

const EmployeesList = () => {
  return (
    <div className="employees-container">
      <CreateEmployee></CreateEmployee>
      <Employee></Employee>
      <Employee></Employee>
      <Employee></Employee>
    </div>
  );
};

export default EmployeesList;
