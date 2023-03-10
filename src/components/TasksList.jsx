import React from "react";
import Create from "./Create";
import Task from "./Task";
import { useGlobalContext } from "../Context/context";

const TasksList = () => {
  const { tasks } = useGlobalContext();

  return (
    <div className="container">
      <Create task={"Task"} />
      {tasks?.map((task) => {
        return <Task key={task.id} id={task.id} task={task} />;
      })}
    </div>
  );
};

export default TasksList;
