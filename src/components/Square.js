import React from "react";
import "./Square.css";

class Square extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            alive: 0,
            status: 0
        };
        this.id = props.id;
        this.handleClick = this.handleClick.bind(this);
        this.setStatus = this.setStatus.bind(this);
        this.setAlive = this.setAlive.bind(this);
        this.update = this.update.bind(this);
    }

    
    componentDidUpdate() {
        console.log("rerendered")
    }


    handleClick() {
        console.log("clicked");
        this.setState((state) => ({
            alive: !state.alive
        }));
    }

    getAlive() {
        return this.state.alive;
    }

    setAlive(value) {
        if (value !== this.state.alive) {
            this.setState({
                alive: value
            });
        }
    }

    setStatus(status) {
        if (status !== this.state.status) {
            this.setState(() => ({
                status: status
            }));
        }
    }

    getStatus() {
        return this.state.status;
    }

    update() {
            this.setState((state) => {
                if (state.status !== this.state.alive)
                {
                    return {
                        alive: state.status
                    }
                }
            })
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