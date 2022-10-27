import React, { useState } from "react";
import "./App.css";
import Add from "./components/Add";
import Column from "./components/Column";

function App() {
  
  const [columnTitles, setColumnTitles] = useState([]);

  const addColumn = () => {
    setColumnTitles([...columnTitles, `Column ${columnTitles.length + 1}`]);
  };

  return (
    <div className="App">
      {columnTitles.map((ct) => (
        <Column columnTitle={ct}></Column>
      ))}
      
        <Add></Add>
      <button onClick={addColumn}>+</button>
    </div>
  );
}

export default App;
