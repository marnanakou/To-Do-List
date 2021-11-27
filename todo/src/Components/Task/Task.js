import React, { useState } from "react";
import "./style.css";

// function TaskToDo(task) {
//   return (
//     <div
//       className="task"
//       style={{ textDecoration: task.completed ? "line-through" : " " }}
//     >
//       {task.title}
//     </div>
//   );
// }

function TaskList() {
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

  // const [showNewTask, setShowNewTask] = useState(false);

  // //add newTask
  // const AddTask = (title) => {
  //   setTasks([...tasks, { title: title, completed: false }]);
  // };

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

  const TaskCompleted = () => {
    // const [taskcompleted, setTaskCompleted] = useState(false);
    handleChange = (e) => {
      let isChecked = e.target.checked;
    };
    return (
      <div className="checkbox">
        <input
          type="checkbox"
          onChange={handleChange}
          style={{
            textDecoration: taskcompleted ? "line-through" : " ",
            color: taskcompleted ? "#5ab87d" : "",
          }}
        />
      </div>
    );
  };

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
            <div>
              <TaskCompleted />
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

export default TaskList;
