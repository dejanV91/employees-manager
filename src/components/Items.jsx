import React, { useEffect, useState } from "react";
import config from "../config.json";
import Item from "./Item";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Items = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const { data } = await axios.get(`${config.api}/users`);
      setEmployees(data);
    };
    fetchEmployees();
  }, []);

  return (
    <div className="container">
      <div>
        <button onClick={() => navigate("/users/new")} className="create-btn">
          Create Employee
        </button>
      </div>
      {employees.map((employee) => {
        return (
          <Item
            key={employee.id}
            id={employee.id}
            employee={employee}
            url="/users/"
          />
        );
      })}
    </div>
  );
};

export default Items;
