import { useState } from "react";
import Card from "./Card";
import "../App.css";


const Column = (props) => {
  const [cardTitles, setCardTitles] = useState([]);

  const addCard = () => {
    setCardTitles([...cardTitles, `Card ${cardTitles.length + 1}`]);
  };

  return (
    <div className="Column">
      <div className="Header">
        <button >&lArr;</button>
        <h3>{props.columnTitle}</h3>
        <button >&rArr;</button>
      </div>
      {cardTitles.map((cat) => (
        <Card cardTitle={cat} />
      ))}

      <button onClick={addCard}>+</button>
    </div>
  );
};
export default Column;
