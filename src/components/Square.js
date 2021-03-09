import React, {useState} from "react";
import "./Square.css";

const Square = React.forwardRef((props, ref) => {
    const [alive, setAlive] = useState(false);
    const id = props.id;
    let className = alive ? "square alive" : "square";

    const handleDivClick = () => {
        setAlive(prevVal => !prevVal);
        console.log(id);
    }
    
    return (
        <div ref={ref} onClick={handleDivClick} className={className}>
        </div>
    )
});

export default Square;