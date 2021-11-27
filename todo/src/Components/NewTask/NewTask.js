import React, { useState } from "react";
import "./style.css";

function CreateNewTask({ addNewTask }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addNewTask();
    // setValue(addNewTask);
  };
  return (
    <div className="newTask-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  );
}

export default CreateNewTask;
