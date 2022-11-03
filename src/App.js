import React, { useState } from "react";
import "./App.css";
import Add from "./components/Add";
import Column from "./components/Column";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

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
  const deleteCl = (itemToDelete) => {
    // console.log(itemToDelete);
    const changedColumnTitles = columnTitles.filter(
      (ct) => ct !== itemToDelete
    );
    setColumnTitles(changedColumnTitles);
  };
  const moveColumn = (columnTitleToMove, indexToInsert) => {
    if (indexToInsert < 0 || indexToInsert === columnTitles.length) {
      alert("error");
      return;
    }
    const newColumns = columnTitles.filter((ct) => ct !== columnTitleToMove);
    newColumns.splice(indexToInsert, 0, columnTitleToMove);
    setColumnTitles(newColumns);
  };

  return (
    <div className="App">
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Add onAddCl={(clEntered) => addColumn(clEntered)} />
        {columnTitles.map((ct, i) => (
          <Grid xs={2} sm={4} md={3} key={ct}>
            <Card>
              <CardContent>
                <Column
                  key={ct}
                  columnTitle={ct}
                  onDeleteClHandler={() => deleteCl(ct)}
                  onMoveLeftHandler={() => moveColumn(ct, i - 1)}
                  onMoveRightHandler={() => moveColumn(ct, i + 1)}
                ></Column>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;
