import React from "react";
import "./style.css";

function Task() {
  return (
    <div>
      <div className="header">List-To-Do</div>
      <div className="container">
        <input type="text" placeholder="What needs to be accompliced?" />
      </div>
    </div>
  );
}

export default Task;
