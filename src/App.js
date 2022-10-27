import React, { useState } from "react";
import "./App.css";
import Add from "./components/Add";
import Column from "./components/Column";

function App() {
  const [columnTitles, setColumnTitles] = useState([]);
  const nameChecker = (newEnteredValue) => {
    let isDupplicate = false;
    for (let i = 0; i < columnTitles.length; i++) {
      // console.log(columnTitles.find((o) => o === newEnteredValue), `counter is ${i}` );
      isDupplicate = columnTitles.find((o) => o === newEnteredValue)
        ? true
        : false;
      // console.log(columnTitles[i], 'hossein' )
      if (isDupplicate) {
        return true;
      }
    }
    return false;
  };

  const addColumn = (ncl) => {
    const isValid = !nameChecker(ncl);
    // nameChecker(ncl);
    if (isValid) {
      setColumnTitles([...columnTitles, ncl]);
    } else {
      alert("dupplicated value");
    }
  };

  return (
    <div className="App">
      {columnTitles.map((ct) => (
        <Column key={ct} columnTitle={ct}></Column>
      ))}

      <Add onAddCl={(clEntered) => addColumn(clEntered)} />
    </div>
  );
}

export default App;
