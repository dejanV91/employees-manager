import React from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/App.scss";

import HomePage from "./pages/HomePage";
import SingleEmloyee from "./pages/SingleEmloyee";
import TasksPage from "./pages/TasksPage";
import SingleTask from "./pages/SingleTask";
import TopPage from "./pages/TopPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/users/:id" element={<SingleEmloyee />}></Route>
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/tasks/:id" element={<SingleTask />} />
        <Route path="/salaries" element={<TopPage />} />
      </Routes>
    </>
  );
}

export default App;
