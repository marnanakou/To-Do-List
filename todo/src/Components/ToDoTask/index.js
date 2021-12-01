import React, { useState } from "react";
import CreateTask from "../Task";
import "./style.css";

function ToDoTask() {
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

  //add newTask
  const AddNewTask = (title) => {
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);
  };

  //remove newTask
  const RemoveTask = (e) => {
    const updatedTasks = tasks.filter((el) => {
      return el.title !== e.target.value;
    });
    setTasks(updatedTasks);
  };

  //remove all tasks
  const RemoveAllTasks = () => {
    setTasks([]);
  };

  //hide the container when task is completed and remove
  const HideTaskCompleted = () => {
    const [completed, setCompleted] = useState(false);

    const handleChange = (e) => {
      let isChecked = e.target.checked;
      if (isChecked) {
        setCompleted(true);
      }
    };
    return (
      <div className="checkbox">
        <input
          type="checkbox"
          onChange={handleChange}
          style={{
            textDecoration: completed ? "line-through" : "",
            color: completed ? "#5ab87d" : "",
          }}
        />
      </div>
    );
  };

  return (
    <div>
      <div className="header">List-To-Do</div>
      <div className="container">
        <input type="text" placeholder="What needs to be accomplished?" />
        {<CreateTask addTask={AddNewTask} />}
        <div className="tasks">
          {tasks.map((task, index) => (
            <div key={index}>
              {/* {HideTaskCompleted()} */}
              <div>{task.title}</div>
              <button value={task.title} onClick={RemoveTask}>
                X
              </button>
            </div>
          ))}
        </div>
        <div className="deleteButton">
          {tasks.length !== 0 ? (
            <button onClick={RemoveAllTasks}>Clear All The Tasks</button>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}

export default ToDoTask;
