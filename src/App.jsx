import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.scss";

import HomePage from "./pages/HomePage";
import TasksPage from "./pages/TasksPage";
import SingleEmloyee from "./pages/SingleEmloyee";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <div className="App"> */}
        <Route path="/" element={<HomePage />} />
        <Route path={"/users/:id"} element={<SingleEmloyee />} />
        <Route path="/tasks" element={<TasksPage />} />
        {/* </div> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
