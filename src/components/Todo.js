import React from "react";

const Todo = ({ todo, handleDelete }) => {
  return (
    <div className="d-flex justify-content-between align-items-center my-1 p-1">
      <p className="mb-0">{todo.title}</p>
      <i className="fa-solid fa-trash" onClick={() => handleDelete(todo.id)}></i>
    </div>
  );
};

export default Todo;
