import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.scss";
// import { AppProvider } from "./Context/context";

import HomePage from "./pages/HomePage";
import TasksPage from "./pages/TasksPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <div className="App"> */}
        <Route path={"/"} element={<HomePage />}></Route>
        <Route path={"/tasks"} element={<TasksPage />}></Route>
        {/* </div> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
