import React, { useEffect, useState } from "react";
import config from "../config.json";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TasksList = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [isClose, setIsClose] = useState(false);
  const [isOpen, setIsOpen] = useState(null);

  const fetchTasks = async () => {
    const { data } = await axios.get(`${config.api}/posts`);
    setTasks(data);
  };
  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = async (task) => {
    try {
      setTasks(tasks.filter((p) => p.id !== task.id));
      await axios.delete(`${config.api}/posts/${task.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div>
        <button onClick={() => navigate("/tasks/new")} className="create-btn">
          Create Task
        </button>
      </div>

      {tasks.map((task) => {
        const { title, id, description, assignee_id, due_data } = task;
        return (
          <div key={id} id={id}>
            <div className="item">
              <h3>{title}</h3>
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
                    navigate(`/tasks/${id}`);
                  }}
                  className="update-btn"
                >
                  Update
                </button>

                <button
                  onClick={() => handleDelete(task)}
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
                <h4>Title:</h4>
                <h3>{title}</h3>
              </div>
              <div>
                <h4>Description:</h4>
                <h3>{description}</h3>
              </div>
              <div>
                <h4>Assigne ID:</h4>
                <h3>{assignee_id}</h3>
              </div>
              <div>
                <h4>Due date:</h4>
                <h3>{due_data}</h3>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TasksList;
