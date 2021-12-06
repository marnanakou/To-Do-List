import React, { useState } from "react";
import "./style.css";

//create NewTask
const CreateTask = (props) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    props.addTask(value);
    console.log(value);
    setValue("");
  };
  return (
    <div className="task-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  );
};

export default CreateTask;
