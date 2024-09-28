import React from "react";

function Item({ name, deleteItem, id, editItem }) {
  return (
    <>
      <div className="item_div">
        <div className="text_div">
          <p>{name}</p>
        </div>
        <i class="fa-regular fa-trash-can" onClick={() => deleteItem(id)}></i>
        <i class="fa-regular fa-pen-to-square" onClick={() => editItem(id)}></i>
      </div>
    </>
  );
}

export default Item;
