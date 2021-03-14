import React, {useState, useRef, useEffect} from "react";
import "./SquareBoard.css";
import Square from "./Square";
import chunk from  "lodash/chunk";

const SquareBoard = (props) => {
    const boardSize = props.size;
    const arrRef = useRef(chunk(new Array(boardSize*boardSize).fill(), boardSize));
    const [running, setRunning] = useState(false);

    useEffect(() => {
        if (running) {
            const intervalId = setInterval(gameLoop, 200);

            return () => {
                clearInterval(intervalId);
            }
        }
        }
    , [running])

    const sumNeighbour = (i, j) => {
        let ir, il, jr, jl
        if ( i < boardSize - 1) ir = i + 1; else ir = 0;
        if ( i > 0 ) il = i - 1; else il = boardSize - 1;
        if ( j < boardSize - 1) jr = j + 1; else jr = 0
        if ( j > 0 ) jl = j - 1; else jl = boardSize - 1;
    
        
        return arrRef.current[ir][j].getAlive() + arrRef.current[il][j].getAlive() + arrRef.current[i][jr].getAlive() + arrRef.current[i][jl].getAlive() 
            + arrRef.current[ir][jr].getAlive() + arrRef.current[ir][jl].getAlive() + arrRef.current[il][jr].getAlive() + arrRef.current[il][jl].getAlive();
        
    }

    const boardCheck = () => {
        for (let i = 0; i < boardSize; i++)
        {
            for (let j = 0; j < boardSize; j++)
            {
                let neightbourAmount = sumNeighbour(i, j);
                //console.log(`${i} ${j} - ${neightbourAmount}`)

                if (arrRef.current[i][j].getAlive() && (neightbourAmount === 2 || neightbourAmount === 3))
                    arrRef.current[i][j].setStatus(1);
                else
                    if (!arrRef.current[i][j].getAlive() && (neightbourAmount === 3))
                        arrRef.current[i][j].setStatus(1);
                    else
                        arrRef.current[i][j].setStatus(0)
            }
        }
    }

    const statusApply = () => {
        for (let i = 0; i < boardSize; i++)
        {
            for (let j = 0; j < boardSize; j++)
            {
                arrRef.current[i][j].update();
            }
        }
    }

    const boardShuffle = () => {
        for (let i = 0; i < boardSize; i++)
        {
            for (let j = 0; j < boardSize; j++)
            {
                if (Math.random() < 0.2)
                {
                    arrRef.current[i][j].setAlive(1);
                }
                else
                    arrRef.current[i][j].setAlive(0);
            }
        }
    }

    const gameLoop = () => {
        boardCheck()
        statusApply();
    }

    const run = () => {
        setRunning(prevVal => !prevVal)
    }

    const clearBoard = () => {
        for (let i = 0; i < boardSize; i++)
        {
            for (let j = 0; j < boardSize; j++)
            {
                    arrRef.current[i][j].setAlive(0);
            }
        }

    }

    return (
        <div className="board">
            {
                arrRef.current.map((item, index) => {
                    return (
                        <div key={`row${index}`} className="row">
                            {
                                item.map((col, colIndex) => 
                                    <Square 
                                        ref={el => arrRef.current[index][colIndex] = el} 
                                        id={boardSize*index+colIndex} 
                                        key={boardSize*index+colIndex} 
                                        alive={item}/>)
                            }
                        </div>
                    )
                })
            }
            <button onClick={boardCheck}>check</button>
            <button onClick={boardShuffle}>shuffle</button>
            <button onClick={statusApply}>update</button>
            <button onClick={gameLoop}>test</button>
            <button onClick={run}>Start</button>
            <button onClick={clearBoard}>Clear</button>
        </div>
    )

}

export default SquareBoard;