import { useState } from "react";
import Card from "./Card";
import "../App.css";
import Add from "./Add";


const Column = (props) => {
  const [currentIndex, setNewIndex] = useState(props.columnTitle);

  const moveRight = () => {
    setNewIndex([...currentIndex, currentIndex.index + 1]);
  };

  const [cardTitles, setCardTitles] = useState([]);

  

  const addCard = () => {
    setCardTitles([...cardTitles, `Card ${cardTitles.length + 1}`]);
  };

  return (
    <div className="Column">
      <div  className="Header">
        <button>&lArr;</button>
        <h3>{props.columnTitle}</h3>
        <button onClick={moveRight}>&rArr;</button>
      </div>
      {cardTitles.map((cat) => (
        <Card cardTitle={cat} />
      ))}
      <Add/>
      <button onClick={addCard}>+</button>
    </div>
  );
};
export default Column;
