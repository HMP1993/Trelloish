import { useState } from "react";
import Card from "./Card";
import "../App.css";
import Add from "./Add";

const Column = (props) => {
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

  const addCard = (nca) => {
    const isValid = !nameChecker(nca);

    if (isValid) {
      setCardTitles([...cardTitles, nca]);
    } else {
      alert("dupplicated value");
    }
  };
  const deleteCa = (itemToDelete) => {
    const changedCardTitles = cardTitles.filter((nca) => nca !== itemToDelete);
    setCardTitles(changedCardTitles);
  };
  const renameCard = (cardTitleToRename, indexToInsert) => {
    const isValid = !nameChecker(cardTitles);

    if (isValid) {
      const newCardTitle = prompt("Enter the new name", cardTitleToRename);
      const newCards = cardTitles.filter((nca) => nca !== cardTitleToRename);
      newCards.splice(indexToInsert, 0, newCardTitle);
      setCardTitles(newCards);
    } else {
      alert("dupplicated value");
    }
  };

  return (
    <div className="Column">
      <span onClick={props.onDeleteClHandler} style={{ cursor: "pointer" }}>
        ❌
      </span>
      <span style={{ cursor: "pointer" }}>✏️</span>
      <div className="Header">
        <button onClick={props.onMoveLeftHandler}>&lArr;</button>
        <h3>{props.columnTitle}</h3>
        <button onClick={props.onMoveRightHandler}>&rArr;</button>
      </div>
      <Add onAddCl={(caEntered) => addCard(caEntered)} />
      {cardTitles.map((nca) => (
        <Card
          key={nca}
          cardTitle={nca}
          onDeleteClHandler={() => deleteCa(nca)}
          onRenameHandler={() => renameCard(nca)}
        />
      ))}

      {/* <button onClick={addCard}>+</button> */}
    </div>
  );
};
export default Column;
