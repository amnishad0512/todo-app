import React, { useContext } from "react";
import ThemeContext, { Theme } from "./../context/Theme";

const Todo = ({ todo, handleDelete }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="d-flex justify-content-between align-items-center my-1 p-1">
      <p className={`mb-0 text-${theme} fs-5`}>{todo.title}</p>
      <i
        className={`fa-solid fa-trash text-${theme} `}
        onClick={() => handleDelete(todo.id)}
      ></i>
    </div>
  );
};

export default Todo;
