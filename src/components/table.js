// iteracja tablicy obiektów


// import React, {Component} from "react";
// import api from "https://recruitment.hal.skygate.io/companies";
//
// class Table extends Component {
//     render() {
//         let api = api.map(p =>
//             <div key={p.data}>
//                 <h1>{p.id}  {p.name}  {p.city}</h1>
//                 {/*<p>{p.bio}</p>*/}
//             </div>
//         );
//         return api;
//     }
// }
//
// export default Iteration;



// import tablicy


import React, {Component} from "react";
// import api from "https://recruitment.hal.skygate.io/companies";

class Companies extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }
    componentDidMount() {
        fetch('https://recruitment.hal.skygate.io/companies')
            .then(response => response.json())
            .then(data => this.setState({ data }));
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

class CompaniesItems extends Component{
    render() {
        return(
            <tbody>
            {this.data().map((item) =>
                <CompaniesItem {...item} key={item.code}/>
            )}
            </tbody>
        );
    }
}

class CompaniesItem extends Component{
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

// class CompaniesFooter extends Component{
//     render() {
//         return (
//             {/*<tfoot>*/}
//             {/*<tr>*/}
            // </tr>
            // </tfoot>
        // )
    // }
// }

class CompaniesPart extends Component{
    render() {
        return(
            <table style={{width: '40vw'}}>
                <Companies/>
                <CompaniesItems/>
                {/*<CompaniesFooter/>*/}
            </table>
        )
    }
}

class table extends Component{
    render() {
        return <Table/>
    }
}

export default table;