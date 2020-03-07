import React, {Component} from "react";

class Main extends Component {
    state = {
        data: null
    };

    componentDidMount() {
        fetch('https://recruitment.hal.skygate.io/companies')
            .then(response => response.json())
            .then(response => {console.log(response)})
            .then(data => this.setState({data}))
            .catch(err => err.log(err));
            }


        render()
        {
            return (
                <h1>Dupa</h1>
            )
        }
    }



    export
    default
    Main;