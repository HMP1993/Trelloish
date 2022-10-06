import React, { useState } from "react";
import "./App.css";
import Column from "./components/Column";

function App() {
  const name = [];
  const [columnTitles, setColumnTitle] = useState(name);

  const addColumn = () => {
    setColumnTitle((name) => [...name, `Column ${name.length + 1}`]);
  };

  return (
    <div className="App">
      <Column columnTitle={columnTitles[0]} />
      <button onClick={addColumn}>+</button>
    </div>
  );
}

export default App;
