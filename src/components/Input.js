import React, { useState } from "react";

const Input = () => {
  const [title, setTitle] = useState("");

  function handleChange(e) {
    setTitle(e.target.value);
  }

  return (
    <form>
      <input
        type="text"
        value={title}
        placeholder="Enter Todo"
        onChange={handleChange}
      />
      <button className="btn btn-primary">Add</button>
    </form>
  );
};

export default Input;
