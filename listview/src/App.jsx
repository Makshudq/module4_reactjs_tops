import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

let listitems = [
  "Use Array.map",
  "Not use for loop",
  "Give each item a unique key",
  "Avoid using array index as the key",
];

function App() {
  return (
    <>
      <div className="container">
        <div className="inner_container">
          <h2>The "React way" to render a list</h2>
          <div className="list_div">
            {listitems.map((item) => {
              return (
                <div className="list_item">
                  <TaskAltIcon className="icon" />
                  <p>{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
