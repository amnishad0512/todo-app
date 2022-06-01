import { useContext, useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import ThemeContext, { Theme } from "./context/Theme";
function App() {
  const [todos, setTodos] = useState([]);
  function fetchTodo() {
    fetch("http://localhost:3004/todos")
      .then((res) => res.json())
      .then((res) => setTodos(res));
  }
  return (
    <div>
      <Theme>
        <Navbar />
        <Input fetchTodo={fetchTodo} />
        <Todos fetchTodo={fetchTodo} todos={todos} setTodos={setTodos} />
      </Theme>
    </div>
  );
}

export default App;
