import React, { useState } from "react";

const Input = () => {
  const [title, setTitle] = useState("");

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
      })
      .catch((error) => {
        console.error("Error:", error);
      });
      setTitle("")
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
        <button className="btn btn-primary" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default Input;
