import React, { useState } from "react";

const addColumn = (props) => {
  const [columnTitle, setColumnTitle] = useState(props.columnTitle);
  const clickHandler = () => {
    setColumnTitle(`"Column" + ${columnTitle.length + 1}`);
  };
};

const Column = ({ columnTitle }) => {
  return (
    <div>
      <h3>{columnTitle}</h3>
      <button onclick={addColumn}>+</button>
    </div>
  );
};
export default Column;
