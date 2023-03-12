import config from "../config.json";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SingleTask = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [task, setTask] = useState({
    id: "",
    title: "",
    description: "",
    assignee_id: "",
    due_data: "",
  });

  useEffect(() => {
    if (id === "new") return;
    const fetchTask = async () => {
      const { data } = await axios.get(`${config.api}/posts/${id}`);
      setTask(data);
    };
    fetchTask();
  }, [id]);

  const handleChange = (e) => {
    const taskClone = { ...task };
    taskClone[e.target.name] = e.target.value;
    setTask(taskClone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id === "new") {
        axios.post(`${config.api}/posts`, task);

        return navigate("/tasks");
      } else {
        axios.put(`${config.api}/posts/${id}`, task);

        return navigate("/tasks");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <form className="single">
        <div>
          {id === "new" ? "" : <label>Title</label>}
          <input
            type="text"
            name="title"
            placeholder="Title..."
            value={task.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          {id === "new" ? "" : <label>Description</label>}
          <input
            type="text"
            name="description"
            placeholder="Description..."
            value={task.description}
            onChange={handleChange}
          />
        </div>
        <div>
          {id === "new" ? "" : <label>Assignee ID</label>}
          <input
            type="text"
            name="assignee_id"
            placeholder="Assignee ID..."
            value={task.assignee_id}
            onChange={handleChange}
          />
        </div>
        <div>
          {id === "new" ? "" : <label>Due data</label>}
          <input
            type="text"
            name="due_data"
            placeholder="Due data..."
            value={task.due_data}
            onChange={handleChange}
          />
        </div>
        <div className="single-page-btns">
          <button onClick={handleSubmit} className="create-btn">
            {id === "new" ? "CREATE" : "UPDATE"}
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate("/tasks");
            }}
            className="cancel"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default SingleTask;
