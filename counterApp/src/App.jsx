import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function counting(e) {
    if (e) {
      setCount(count + 1);
    } else setCount(count - 1);
  }

  return (
    <>
      <div
        className="container"
        style={{ display: "grid", placeItems: "center" }}
      >
        <h1>Counter App</h1>
        <h2>{count}</h2>
        <div className="buttons_div">
          <button
            style={{
              backgroundColor: "green",
              color: "#fff",
              margin: ".5rem",
              padding: ".5rem",
            }}
            onClick={() => counting(1)}
          >
            increament
          </button>
          <button
            style={{
              backgroundColor: "red",
              color: "#fff",
              margin: ".5rem",
              padding: ".5rem",
            }}
            onClick={() => counting(0)}
          >
            Decreament
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
