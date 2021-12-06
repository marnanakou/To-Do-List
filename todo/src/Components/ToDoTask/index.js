import React, { useState } from "react";
import "./style.css";

//hide the container when task is completed and remove
const TaskRow = (props) => {
  const [completed, setCompleted] = useState(false);

  const handleChange = (e) => {
    let isChecked = e.target.checked;
    if (isChecked) {
      setCompleted(true);
    }
  };
  return (
    <div key={props.index}>
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
      <div>{props.taskObject.title}</div>
      <button value={props.taskObject.title} onClick={props.removeTaskCallBack}>
        X
      </button>
    </div>
  );
};

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

  //state of the input field
  const [userInput, setUserInput] = useState();
  const handleInputChange = (e) => {
    console.log(e);
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userInput) return;
    AddNewTask(userInput);
    setUserInput("");
  };
  return (
    <div>
      <div className="header">List-To-Do</div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userInput}
            placeholder="What needs to be accomplished?"
            onChange={handleInputChange}
          />
        </form>
        <div className="tasks">
          {tasks.map((task, index) => (
            <TaskRow
              taskObject={task}
              index={index}
              removeTaskCallBack={RemoveTask}
            />
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
