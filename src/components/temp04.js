import React, {Component} from "react";


class FetchExample extends Component {
    state = {
        data: false,
        id: null
        // name: ''
        // city: false

    };

    componentDidMount() {
        fetch("https://recruitment.hal.skygate.io/companies").then(r => r.text())
            .then( name => {
            console.log('DATA:', name)})

        //
        // console.log(r.id)
        // console.log(r.name);
        // console.log(r.city);

            .then(id => {
                this.setState({
                    data: id
                });
            });

    }

    render() {
        if (!this.state.data)
            return <h1>...</h1>;

        return <div>{this.state.data}</div>
    }
}

function Temp04() {
    return <FetchExample/>
}

export default Temp04;
