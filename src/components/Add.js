import { useState } from "react";

const Add = (props) => {
    const  [enteredValue, setEnteredValue] = useState('')
    const AddHandler = (event) => {
    event.preventDefault();
    console.log(enteredValue)
    setEnteredValue('')
    }
    const TitleChangeHanlder = (event) => {
        setEnteredValue(event.target.value)
    }
    return (
        <div>
        <input onChange={TitleChangeHanlder} value={enteredValue} />
        <button onClick={AddHandler} >Add</button>
        </div>
    );
};

export default Add;
