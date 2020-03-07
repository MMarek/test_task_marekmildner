import React, {Component} from "react";

class Main extends Component {
    state = {
        data: []
    };

    componentDidMount() {
        fetch('https://recruitment.hal.skygate.io/companies')
            .then(response => response.json())
            // .then(response => {console.log(response)})
            .then(data => this.setState({data}))
            .catch(err => err.log(err));
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.state.data[32]);
    }


    render() {
        return (
            <CompaniesItem data={this.state.data}/>
        )
    }
}


class CompaniesItem extends Component {
    render() {
        const {id, name, city} = this.props.data[32];
        return (
            <h1></h1>
        );
    }
}


export default Main;