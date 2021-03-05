import React, {useState} from "react";
import "./Square.css";

const Square = (props) => {
    const [alive, setAlive] = useState(false);
    const id = props.id;

    let className = alive ? "square alive" : "square";

    const handleDivClick = () => {
        setAlive(prevVal => !prevVal);
    }
    
    return (
        <div onClick={handleDivClick} className={className}>
        </div>
    )

}

export default Square;