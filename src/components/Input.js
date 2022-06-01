import React, { useContext, useState } from "react";
import ThemeContext from "../context/Theme";

const Input = ({ fetchTodo }) => {
  const [title, setTitle] = useState("");
  const { theme } = useContext(ThemeContext);
  function handleChange(e) {
    setTitle(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await fetch("http://localhost:3004/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        fetchTodo();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    setTitle("");
  }
  return (
    <div className="w-25 mx-auto my-3">
      <form className="d-flex" onSubmit={handleSubmit}>
        <input
          className="w-100 px-2"
          type="text"
          value={title}
          placeholder="Enter Todo"
          onChange={handleChange}
        />
        <button className={`btn btn-${theme} border`} type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default Input;
