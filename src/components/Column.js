import { useState } from "react";
import Card from "./Card";
import "../App.css";
import Add from "./Add";

const Column = (props) => {
  // const [currentIndex, setNewIndex] = useState(props.columnTitle);

  // const moveRight = () => {
  //   setNewIndex([...currentIndex, currentIndex.index + 1]);
  // };

  const [cardTitles, setCardTitles] = useState([]);
  const nameChecker = (newEnteredValue) => {
    let isDupplicate = false;
    for (let i = 0; i < cardTitles.length; i++) {
      isDupplicate = cardTitles.find((o) => o === newEnteredValue)
        ? true
        : false;

      if (isDupplicate) {
        return true;
      }
    }
    return false;
  };

  // const addCard = () => {
  //   setCardTitles([...cardTitles, `Card ${cardTitles.length + 1}`]);
  // };
  const addCard = (nca) => {
    const isValid = !nameChecker(nca);

    if (isValid) {
      setCardTitles([...cardTitles, nca]);
    } else {
      alert("dupplicated value");
    }
  };
  const DeleteCa = (itemToDelete) => {
    console.log(itemToDelete);
    const changedCardTitles = cardTitles.filter(
      (nca) => nca !== itemToDelete
    );
    setCardTitles(changedCardTitles);
  };

  return (
    <div className="Column">
      <span onClick={props.onDeleteClHandler} style={{ cursor: "pointer" }}>
        ❌
      </span>
      <span style={{ cursor: "pointer" }}>✏️</span>
      <div className="Header">
        <button>&lArr;</button>
        <h3>{props.columnTitle}</h3>
        <button>&rArr;</button>
      </div>
      <Add onAddCl={(caEntered) => addCard(caEntered)} />
      {cardTitles.map((nca) => (
        <Card
          key={nca}
          cardTitle={nca}
          onDeleteClHandler={() => DeleteCa(nca)}
        />
      ))}

      {/* <button onClick={addCard}>+</button> */}
    </div>
  );
};
export default Column;
