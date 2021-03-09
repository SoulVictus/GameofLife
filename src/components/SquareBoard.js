import React, {useState, useRef, useEffect} from "react";
import "./SquareBoard.css";
import Square from "./Square";
import chunk from  "lodash/chunk";

const SquareBoard = (props) => {
    const boardSize = props.size;
    const [array, setArray] = useState(chunk(Array(boardSize*boardSize).fill(false), boardSize));
    const arrayRef = useRef(new Array())

    useEffect(() => {
        console.log(arrayRef.current)
    })

    const boardCheck = () => {
        for (let i = 0; i < arrayRef.current.length; i++)
        {
            // Sprawdzenie rogu
        }
    }

    return (
        <div className="board">
            {
                array.map((item, index) => {
                    return (
                        <div key={index} className="row">
                            {
                                item.map((col, colIndex) => <Square ref={el => arrayRef.current.push(el)} key={boardSize*index+colIndex} alive={item}/>)
                            }
                        </div>
                    )
                })
            }
            <button onClick={boardCheck}>Test</button>
        </div>
    )

}

export default SquareBoard;