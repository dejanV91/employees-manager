import React from "react";
import "./styles/App.scss";

// import HomePage from "./pages/HomePage";
import TasksPage from "./pages/TasksPage";

function App() {
  return (
    <div className="App">
      {/* <HomePage></HomePage> */}
      <TasksPage></TasksPage>
    </div>
  );
}

export default App;
