import React, {Component} from "react";

class Companies extends Component {

    componentDidMount() {
        this.loadInfo();
    }

    loadInfo(id) {
        fetch('https://recruitment.hal.skygate.io/companies')
            .then(response =>
                response.json())
            .then(response => {
                console.log(response);
            })
            .then(data => this.setState({data}));
    }

    render() {
        return (

                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>City</th>
                </tr>
        )
    }
}

function Task01() {
    return <Companies/>
}

export default Task01;