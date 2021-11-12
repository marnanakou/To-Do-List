import React, { useState } from "react";
import "./style.css";

function Task() {
  const [tasks, setTasks] = useState([
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
      title: "Handback ready for my trip to Vienna",
      completed: false,
    },
  ]);

  const addNewTask = (title) => {
    setTasks([...tasks, { title: title, completed: false }]);
  };

  const [showNewTask, setShowNewTask] = useState(false);

  //the second container appears after the click on the 1st one
  const showNewTaskAdded = () => {
    setShowNewTask(true);
  };

  return (
    <div>
      <div className="header">List-To-Do</div>
      <div className="container">
        <input
          type="text"
          placeholder="What needs to be accompliced?"
          value={addNewTask}
        />
      </div>
      <ul>
        {tasks.map((el, index) => (
          <li key={index}>{el.title}</li>
        ))}
      </ul>
      <div>
        <button onClick={showNewTaskAdded}></button>
      </div>
    </div>
  );
}

export default Task;
