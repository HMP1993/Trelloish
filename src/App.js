import React, { useState } from "react";
import "./App.css";
import Add from "./components/Add";
import Column from "./components/Column";

function App() {
  
  const [columnTitles, setColumnTitles] = useState([]);

  const addColumn = (props) => {
    setColumnTitles([...columnTitles, props.enteredValue]);
  };

  return (
    <div className="App">
      {columnTitles.map((ct) => (
        <Column columnTitle={ct}></Column>
      ))}

      <Add onAddCl={addColumn} />
      <button onClick={addColumn}>+</button>
    </div>
  );
}

export default App;
