import React, { useState } from "react";
import "./App.css";
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
      

      <button onClick={addColumn}>+</button>
    </div>
  );
}

export default App;
