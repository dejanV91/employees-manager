import React, { useEffect, useState } from "react";
import config from "../config.json";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Items = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [isClose, setIsClose] = useState(false);
  const [isOpen, setIsOpen] = useState(null);

  const fetchEmployees = async () => {
    const { data } = await axios.get(`${config.api}/users`);
    setEmployees(data);
  };
  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleDelete = async (employee) => {
    try {
      setEmployees(employees.filter((p) => p.id !== employee.id));
      await axios.delete(`${config.api}/users/${employee.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="counter">
        <h4>Number employees:</h4>
        <h3>{employees.length}</h3>
      </div>
      <div>
        <button onClick={() => navigate("/users/new")} className="create-btn">
          Create Employee
        </button>
      </div>

      {employees.map((employee) => {
        const { full_name, id, date_of_birth, email, monthly_salary, phone } =
          employee;
        return (
          <div key={id} id={id}>
            <div className="item">
              <h3>{full_name}</h3>
              <div className="buttons-group">
                <button
                  onClick={() => {
                    setIsClose(!isClose);
                    setIsOpen(id);
                  }}
                  className="read-more"
                >
                  {isOpen === id && isClose ? "Close" : "View"}
                </button>

                <button
                  onClick={() => {
                    navigate(`/users/${id}`);
                  }}
                  className="update-btn"
                >
                  Update
                </button>

                <button
                  onClick={() => handleDelete(employee)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            </div>

            <div
              className={
                isOpen === id && isClose ? "dropDown open" : "dropDown"
              }
            >
              <div>
                <h4>Full Name:</h4>
                <h3>{full_name}</h3>
              </div>
              <div>
                <h4>Email:</h4>
                <h3>{email}</h3>
              </div>
              <div>
                <h4>Phone:</h4>
                <h3>{phone}</h3>
              </div>
              <div>
                <h4>Date of birth:</h4>
                <h3>{date_of_birth}</h3>
              </div>
              <div>
                <h4>Salary:</h4>
                <h3>{monthly_salary}</h3>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Items;
