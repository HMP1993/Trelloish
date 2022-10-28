import React, { useState } from "react";
import "./App.css";
import Add from "./components/Add";
import Column from "./components/Column";

function App() {
  const [columnTitles, setColumnTitles] = useState([]);
  const nameChecker = (newEnteredValue) => {
    let isDupplicate = false;
    for (let i = 0; i < columnTitles.length; i++) {
      isDupplicate = columnTitles.find((o) => o === newEnteredValue)
        ? true
        : false;

      if (isDupplicate) {
        return true;
      }
    }
    return false;
  };

  const addColumn = (ncl) => {
    const isValid = !nameChecker(ncl);

    if (isValid) {
      setColumnTitles([...columnTitles, ncl]);
    } else {
      alert("dupplicated value");
    }
  };
  const DeleteCl = (itemToDelete) => {
    console.log(itemToDelete);
    const changedColumnTitles = columnTitles.filter(
      (ct) => ct !== itemToDelete
    );
    setColumnTitles(changedColumnTitles);
  };

  return (
    <div className="App">
      <Add onAddCl={(clEntered) => addColumn(clEntered)} />
      {columnTitles.map((ct) => (
        <Column key={ct} columnTitle={ct}
         onDeleteClHandler= {()=>DeleteCl(ct) }
         ></Column>
      ))}
    </div>
  );
}

export default App;
