import React, { useState } from "react";



const Column = () => {
  const name = ['Column'];
  const [columnTitle,setColumnTitle] = useState(name);

  const addColumn = () => {
    setColumnTitle(`Column ${name.length}`);

  }

  return (
    <div>
      <h3>{columnTitle}</h3>
      <button onClick={addColumn}>+</button>
    </div>
  );
};
export default Column;
