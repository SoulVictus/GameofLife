import React from "react";
import "./SquareBoard.css";

const SquareBoard = (props) => {
    const boardSize = props.size;
    console.log(props.children)

    return (
        <div className="board">
            {props.children}
        </div>
    )

}

export default SquareBoard;