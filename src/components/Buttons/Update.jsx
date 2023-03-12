import React from "react";
import { useNavigate } from "react-router-dom";

const Update = ({ url, id }) => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(`${url}${id}`)} className="update-btn">
      Update
    </button>
  );
};

export default Update;
