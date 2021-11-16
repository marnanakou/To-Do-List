import React, { useState } from "react";
import "./style.css";

function CreateNewTask({ addNewTask }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addNewTask(value);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="newTask-container">
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
      </form>
    </div>
  );
}

export default CreateNewTask;
