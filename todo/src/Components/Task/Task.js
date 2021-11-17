import React, { useState } from "react";
import "./style.css";

function TaskToDo(task) {
  return (
    <div
      className="task"
      style={{ textDecoration: task.completed ? "line-through" : " " }}
    >
      {task.title}
    </div>
  );
}

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

  // const addNewTask = (title) => {
  //   setTasks([...tasks, { title: title, completed: false }]);
  // };

  // const [showNewTask, setShowNewTask] = useState(false);

  // //the second container appears after the click on the 1st one
  // const showNewTaskAdded = () => {
  //   addNewTask(value);
  //   setShowNewTask(" ");
  // };

  return (
    <div>
      <div className="header">List-To-Do</div>
      <div className="container">
        <input type="text" placeholder="What needs to be accompliced?" />
        <div className="tasks">
          {tasks.map((task, index) => (
            <Task key={index} index={index} task={task}></Task>
          ))}
        </div>
        {/* <div>
          <button onClick={showNewTaskAdded}></button>
        </div> */}
      </div>
    </div>
  );
}

export default Task;
