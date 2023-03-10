import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = React.createContext();

const api = "https://6334a608ea0de5318a06d722.mockapi.io";

const AppProvider = ({ children }) => {
  const [employees, setEmployees] = useState();
  const [tasks, setTasks] = useState();

  async function getAllEmployees() {
    try {
      const request = await axios.get(api + "/users");
      const data = request.data;
      setEmployees(data);
    } catch (error) {
      console.log("Error getAllEmployees function");
    }
  }
  async function getAllTasks() {
    try {
      const request = await axios.get(api + "/posts");
      const data = request.data;
      setTasks(data);
    } catch (error) {
      console.log("Error getAllTasks function");
    }
  }

  useEffect(() => {
    getAllEmployees();
    getAllTasks();
  }, []);

  return (
    <AppContext.Provider value={{ employees, tasks }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
