import { useState } from "react";
import Card from "./Card";


const Column = (props) => {
  const [cardTitles, setCardTitles] = useState([]);

  const addCard = () => {
    setCardTitles([...cardTitles, `Card ${cardTitles.length + 1}`]);
  };

  return (
    <div>
      <h3>{props.columnTitle}</h3>
      {
      cardTitles.map((ct) => (<Card cardTitle={ct} />))
      }

      <button onClick={addCard}>+</button>
    </div>
  );
};
export default Column;
