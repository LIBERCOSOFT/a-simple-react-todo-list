import React from "react";

const ShowTodo = (props) => {
    return(
        <div>
          <ul>
            {props.todoArray.map((i) =><li>{i}</li>)}
          </ul>
        </div>
    )
}

export default ShowTodo