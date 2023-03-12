import config from "../config.json";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SingleEmloyee = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    date_of_birth: "",
    email: "",
    full_name: "",
    id: "",
    monthly_salary: 0,
    phone: "",
  });

  useEffect(() => {
    if (id === "new") return;
    const fetchEmployee = async () => {
      const { data } = await axios.get(`${config.api}/users/${id}`);
      setEmployee(data);
    };
    fetchEmployee();
  }, [id]);

  const handleChange = (e) => {
    const employeeClone = { ...employee };
    employeeClone[e.target.name] = e.target.value;
    setEmployee(employeeClone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id === "new") {
        axios.post(`${config.api}/users`, employee);

        return navigate("/");
      } else {
        axios.put(`${config.api}/users/${id}`, employee);

        return navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <form className="single">
        <div>
          {id === "new" ? "" : <label>Full Name</label>}
          <input
            type="text"
            name="full_name"
            placeholder="Full Name..."
            value={employee.full_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          {id === "new" ? "" : <label>Email</label>}
          <input
            type="email"
            name="email"
            placeholder="Email..."
            value={employee.email}
            onChange={handleChange}
          />
        </div>
        <div>
          {id === "new" ? "" : <label>Phone</label>}
          <input
            type="text"
            name="phone"
            placeholder="Phone..."
            value={employee.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          {id === "new" ? "" : <label>Birthday</label>}
          <input
            type="text"
            name="date_of_birth"
            placeholder="Birthday..."
            value={employee.date_of_birth}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Salary</label>
          <input
            type="number"
            name="monthly_salary"
            placeholder="Salary..."
            value={employee.monthly_salary}
            onChange={handleChange}
          />
        </div>

        <button onClick={handleSubmit} className="create-btn">
          {id === "new" ? "CREATE" : "UPDATE"}
        </button>
      </form>
    </div>
  );
};

export default SingleEmloyee;
