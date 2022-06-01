import "./App.css";
import Input from "./components/Input";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
function App() {
  return (
    <>
      <Navbar />
      <Input />
      <Todos />
    </>
  );
}

export default App;
