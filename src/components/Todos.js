import React, { useEffect, useState } from "react";
import Todo from "./Todo";

const Todos = ({ fetchTodo, todos, setTodos }) => {
  useEffect(() => {
    fetchTodo();
  }, []);

  async function handleDelete(id) {
    await fetch("http://localhost:3004/todos/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json()) // or res.json()
      .then((res) => fetchTodo());
  }
  return (
    <div className="w-25 mx-auto my-3">
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} handleDelete={handleDelete} />;
      })}
    </div>
  );
};

export default Todos;
