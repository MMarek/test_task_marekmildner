import React, {Component} from "react";



class FetchExample extends Component {
    state = {
        data: false
    };

    componentDidMount() {
        fetch("https://recruitment.hal.skygate.io/companies").then(r => r.text())
            .then(id => {
                this.setState({
                    data: id
                });
            });
    }

    render() {
        if (!this.state.data)
            return <h1>ID to...</h1>;

        return <h1>Twoje ID: {this.state.data}</h1>
    }
}

function Task04() {
    return <FetchExample/>
}

export default Task04;
