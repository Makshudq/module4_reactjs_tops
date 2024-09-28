import React, { useState, useRef } from "react";
import Item from "./Item";
let editedflage = 0;
function ContainerTodo() {
  const [state, setState] = useState([]);
  const [inputdata, setinputdata] = useState("");

  function addItem() {
    if (editedflage) {
      console.log(editedflage);
      let updateditems = state.map((item) => {
        if (item.id == editedflage) {
          item.name = document.getElementById("inputtrackID").value;
        }

        return item;
      });

      setState(updateditems);
      editedflage = 0;
    } else {
      setState((oldstate) => [
        ...oldstate,
        { id: Math.random(), name: inputdata },
      ]);
      console.log("New");
      console.log(state);
    }
    setinputdata("");
  }

  function editItem(id) {
    let editedItem = state.filter((item) => item.id == id);
    document.getElementById("inputtrackID").value = editedItem[0].name;
    editedflage = id;
    console.log(editedflage);
  }

  function clearLIst() {
    setState([]);
  }
  function deleteItem(id) {
    let filteredItem = state.filter((item) => item.id !== id);
    setState(filteredItem);
  }
  return (
    <>
      <div className="container_wrapper">
        <div className="inner_Box">
          <h1>Grocery Shopping</h1>
          <div className="listContainer">
            {state.map((daita) => (
              <Item
                key={daita.id}
                name={daita.name}
                deleteItem={deleteItem}
                id={daita.id}
                editItem={editItem}
              />
            ))}
          </div>
          <div className="input_div">
            <input
              id="inputtrackID"
              // ref={myref}
              type="text"
              value={inputdata}
              onChange={(e) => setinputdata(e.target.value)}
            />{" "}
            <button className="addbtn" onClick={() => addItem()}>
              {inputdata ? "Done" : "Add"}
            </button>
          </div>
          <button onClick={() => clearLIst()} className="deletebtn">
            Delete List
          </button>
        </div>
      </div>
    </>
  );
}

export default ContainerTodo;
