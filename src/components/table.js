// iteracja tablicy obiektów


// import React, {Component} from "react";
// import people from "./people";
//
// class Iteration extends Component {
//     render() {
//         let peopleJsx = people.map(p =>
//             <div key={p.title}>
//                 <h1>{p.title}  {p.name}  {p.surname}</h1>
//                 <p>{p.bio}</p>
//             </div>
//         );
//         return peopleJsx;
//     }
// }
//
// export default Iteration;



// import tablicy


import React, {Component} from "react";
import api from "https://recruitment.hal.skygate.io/companies";

class Companies extends Component {
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
            {api.map((item) =>
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
            {/*<tfoot>*/}
            {/*<tr>*/}
            // </tr>
            // </tfoot>
        // )
    // }
// }

class Companies extends Component{
    render() {
        return(
            <table style={{width: '40vw'}}>
                <ReceiptHeader/>
                <ReceiptItems/>
                <ReceiptFooter/>
            </table>
        )
    }
}

class table extends Component{
    render() {
        return <Companies/>
    }
}

export default table;