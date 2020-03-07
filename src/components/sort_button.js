// three buttons

import React, {Component} from "react";

class ButtonCounter extends Component{
    state = {
        counter: 0
    };

    increaseCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    };

    increaseCounter1 = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    };


    render() {
        return (
            <>
                <h1>{this.state.counter}</h1>
                <ButtonToClick counterEvent={this.increaseCounter}/>
                <ButtonToClick counterEvent={this.increaseCounter1}/>
            </>
        )
    }
}

class ButtonToClick extends Component{
    handleClick = () => {
        if (typeof this.props.counterEvent === 'function') {
            this.props.counterEvent();
        }
    };

    render() {
        return <button onClick={this.handleClick}>Click me!</button>
    }
}

function sort_button() {
    return <ButtonCounter/>
}

export default sort_button();



// yes/no button


import React, {Component} from "react";

class CheckBox extends Component{
    state = {
        checked: false
    };

    handleClick = () => {
        this.setState({
            checked: !this.state.checked
        })
    };

    render() {
        return <button onClick={this.handleClick}>{this.state.checked ? "TAK" : "NIE"}</button>
    }
}

function sort_button() {
    return <CheckBox/>
}

export default sort_button();