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

  const addNewTask = () => {
    setTasks([...tasks]);
  };

  const [showNewTask, setShowNewTask] = useState(false);

  //the second container appears after the click on the 1st one
  const ShowNewTaskAdded = () => {
    setShowNewTask(true);
  };

  return (
    <div>
      <div className="header">List-To-Do</div>
      <div className="container">
        <Task
          type="text"
          placeholder="What needs to be accompliced?"
          value={addNewTask}
        />
      </div>
      <ul>
        {tasks.map((tasks, index) => (
          <li key={index} tasks={tasks}></li>
        ))}
      </ul>
      <div>
        <button onClick={ShowNewTaskAdded}></button>
      </div>
    </div>
  );
}

export default Task;
