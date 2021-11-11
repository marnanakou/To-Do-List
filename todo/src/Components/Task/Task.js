import React, { useState } from "react";
import "./style.css";

function Task() {
  const [value, setValue] = useState();

  const [tasks, seTasks] = useState([
    {
      title: "Go to the Gym",
      completed: false,
    },
    {
      title: "Coffee with Thewnitsa",
      completed: true,
    },
    {
      title: "Buy furniture",
      completed: true,
    },
    {
      title: "Going to the cinema",
      completed: false,
    },
    {
      title: "Language ready for my trip to Vienna",
      completed: false,
    },
  ]);

  return (
    <div>
      <div className="header">List-To-Do</div>
      <div className="container">
        <input type="text" placeholder="What needs to be accompliced?" />
      </div>
      <ul>
        {tasks.map((tasks, index) => (
          <li key={index} tasks={tasks}></li>
        ))}
      </ul>
    </div>
  );
}

export default Task;
