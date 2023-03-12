import React, { useEffect, useState } from "react";
import config from "../config.json";
import axios from "axios";

const TopSalaries = () => {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    const { data } = await axios.get(`${config.api}/users`);
    setEmployees(data);
  };
  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="container">
      <div className="counter">
        <h4>TOP 5 SALARIES</h4>
      </div>
      <div>
        <button onClick={() => window.history.back()} className="create-btn">
          Back
        </button>
      </div>

      {employees
        .sort((a, b) => b.monthly_salary - a.monthly_salary)
        .slice(0, 5)
        .map((employee) => {
          const { full_name, id, monthly_salary } = employee;
          return (
            <div key={id} id={id}>
              <div className="item">
                <h3>{full_name}</h3>
                <div className="buttons-group">
                  <h2>$ {monthly_salary}</h2>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default TopSalaries;
