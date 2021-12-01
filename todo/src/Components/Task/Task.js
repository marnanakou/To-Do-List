import React, { useState } from "react";
import "./style.css";

//create NewTask
const CreateTask = ({ addNewTask }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addNewTask(value);
    setValue("");
  };
  return (
    <div className="task-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={setValue}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  );
};

export default CreateTask;

// const TaskCompleted = () => {
//     const [taskcompleted, setTaskCompleted] = useState(false);

//     const handleChange = (e) => {
//       let isChecked = e.target.checked;
//       if (isChecked) {
//         setTaskCompleted(true);
//       }
//     };
//     return (
//       <div className="checkbox">
//         <input
//           type="checkbox"
//           onChange={handleChange}
//           style={{
//             textDecoration: taskcompleted ? "line-through" : " ",
//             color: taskcompleted ? "#5ab87d" : "",
//           }}
//         />
//       </div>
//     );
//   };

//   // //the second container appears after the click on the 1st one
//   // const showNewTaskAdded = () => {
//   //   addNewTask(value);
//   //   setShowNewTask(" ");
//   // };

//   return (
//
//   );
// }
