import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Add = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const AddHandler = (event) => {
    event.preventDefault();

    if (!enteredValue) {
      return alert("No Input");
    }
    console.log(enteredValue);
    props.onAddCl(enteredValue);
    // props.onAddCa(enteredValue)
    setEnteredValue("");
  };
  const TitleChangeHanlder = (event) => {
    setEnteredValue(event.target.value);
  };
  return (
    <div>
      <TextField
        id="standard-basic"
        label="Say my name"
        variant="standard"
        onChange={TitleChangeHanlder}
        value={enteredValue}
      />
      <Button size="small" variant="outlined" onClick={AddHandler}>
        Add
      </Button>
    </div>
  );
};

export default Add;
