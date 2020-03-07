import React, {Component} from "react";
import table from "./table";

class CompaniesImport extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }




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
            <thead style={{textAlign: 'left'}}>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>City</th>
            </tr>
            </thead>
        )
    }
}

class CompaniesItems extends Component {
    render() {
        return (
            <tbody>
            {this.data().map((item) =>
                <CompaniesItem {...item} key={item.code}/>
            )}
            </tbody>
        );
    }
}

class CompaniesItem extends Component {
    render() {
        const {id, name, city} = this.props;
        return (
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{city}</td>
            </tr>
        );
    }
}

class CompaniesPart extends Component {
    render() {
        return (
            <table style={{width: '40vw'}}>
                <CompaniesImport/>
                <CompaniesItems/>
            </table>
        )
    }
}

class Task02 extends Component {
    render() {
        return <CompaniesPart/>
    }
}

export default Task02;