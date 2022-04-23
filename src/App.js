import logo from "./logo.svg";
import "./App.css";
import TodoInput from "./components/TodoInput";
import Todo from "./components/Todo";
import { useState } from "react";

function App() {
  const [inp, setInp] = useState("");

  const [array, setArray] = useState([]);

  return (
    <div className="App">
      <h1>TODO</h1>
      <TodoInput inp={inp} setInp={setInp} array={array} setArray={setArray} />

      {array.map((arr, index) => {
        return (
          <Todo
            key={index}
            index={index}
            arr={arr}
            array={array}
            setArray={setArray}
          />
        );
      })}
    </div>
  );
}

export default App;
