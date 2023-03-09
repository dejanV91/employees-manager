import React from "react";
import "./styles/App.scss";

import Header from "./components/Header/Header";
import EmployeesList from "./components/EmployeesList";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <EmployeesList></EmployeesList>
    </div>
  );
}

export default App;
