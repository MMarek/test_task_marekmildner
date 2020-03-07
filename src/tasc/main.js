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
        let data = this.props.data;
        // const {id, name, city} = this.props.data[32];
        return (
            <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>CITY</th>
                    </tr>
                    </thead>
                <tbody>
                {data.map(item =>
                    <tr key={item.id}>
                        <th>{item.id}</th>
                        <th>{item.name}</th>
                        <th>{item.city}</th>
                    </tr>)}
                </tbody>
            </table>
        );
    }
}


export default Main;