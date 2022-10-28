const Card = (props) => {
  return (
    <div>
      <h4>{props.cardTitle}</h4>
      <span onClick={props.onDeleteClHandler} style={{ cursor: "pointer" }}>
        ❌
      </span>
      <span onClick={props.onRenameHandler} style={{ cursor: "pointer" }}>✏️</span>
    </div>
  );
};
export default Card;
