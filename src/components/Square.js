import React from "react";
import "./Square.css";

class Square extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            alive: false,
            status: ""
        };
        this.handleClick = this.handleClick.bind(this);
        this.statusChange = this.statusChange.bind(this);
    }

    handleClick() {
        console.log("clicked");
        this.setState({alive: !this.state.alive});
    }

    statusChange() {
        
    }
    
    render() {
        let className = this.state.alive ? "square alive" : "square";
        return (
            <div onClick={this.handleClick} className={className}>
            </div>
        )
    }
};

export default Square;