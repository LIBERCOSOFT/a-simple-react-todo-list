import React from "react";

const ControlTodos = (props) => {
    return(
      <div>
        <input type="text" onChange={props.changeHandler} value={props.value}/>
        <button onClick={props.clickHandler} className="addbtn">Add</button>
        <button onClick={props.removeHandler} className="removebtn">Remove</button>
        <button onClick={props.resetHandler} className="resetbtn">Reset</button>
      </div>
    )
}

export default ControlTodos