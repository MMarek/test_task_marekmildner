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
    }

    render() {
        return (
            <>
            </>
        )
    }
}


function Temp01() {
    return <Companies/>
}

export default Temp01;