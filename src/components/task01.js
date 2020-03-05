import React, {Component} from "react";


// let url = "https://recruitment.hal.skygate.io/companies";

$(function () {
        const Url = "https://recruitment.hal.skygate.io/companies";

        const id = $('id');
        const name = $('name');
        const city = $('city');

        function createTable(table) {

            const id = $('<span>').text(id);
            const name = $('<span>').text(name);
            const city = $('<span>').text(city);
        }
    }
)


// class Companies extends Component {
//     state = {
//         // id: this.props.id,
//         // name: this.props.name,
//         // city: this.props.city,
//         // totalIncome: this.props.totalIncome,
//         // averageIncome: this.props.averageIncome,
//         // lastMonthIncome: this.props.lastMonthIncome
//
//         id: null,
//         name: null,
//         city: null,
//         // totalIncome: null,
//         // averageIncome: null,
//         // lastMonthIncome: null
//     };
//
//     showId = (id) => {
//         this.loadInfo(id);
//     };
//
//     componentDidMount() {
//         this.loadInfo(this.state.id);
//     }
//
//     loadInfo() {
//         fetch('https://recruitment.hal.skygate.io/companies')
//             .then(response => {
//                 console.log(response.id);
//                 console.log(response.name);
//                 console.log(response.city);
//             })
//         .catch(err => err.log(err))
//     }
//
//
//     render() {
//         return (
//             <Companies onSearch={this.showId}/>
//         )
//     }
// }
//
// class TableForm extends Component {
//
// }


// test

class Companies extends Component {
    state = {
        // id: this.props.id,
        // name: this.props.name,
        // city: this.props.city,
        // totalIncome: this.props.totalIncome,
        // averageIncome: this.props.averageIncome,
        // lastMonthIncome: this.props.lastMonthIncome

        id: null,
        name: null,
        city: null,
        // totalIncome: null,
        // averageIncome: null,
        // lastMonthIncome: null
    };

    showId = (id) => {
        this.loadInfo(id);
    };

    componentDidMount() {
        this.loadInfo(this.state.id);
    }

    loadInfo() {
        fetch(Api)
            .then(response => {
                console.log(response.id);
                // console.log(response.name);
                // console.log(response.city);
            })
            .catch(err => err.log(err))
    }


    render() {
        return (
            <>
                <TableForm onSearch={this.showId}/>
                {this.state.id && <h1>{this.state.id}</h1>}
            </>
        )
    }
}

class TableForm extends Component {
    state = {
        id: '',
    };

    handleID = (e) => {
        this.setState({
            id: e.target.value
        })
    };

    handleSubmitForm = (e) => {
        e.preventDefault();
        if (typeof this.props.onSearch === 'function') {
            this.props.onSearch(this.state.id);
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmitForm}>
                <input name='id'
                       type='text'
                       placeholder='id'
                       value={this.state.id}
                       onChange={this.handleID}
                />
                <button>Search</button>
            </form>
        )
    }
}


function Task01() {
    return <Companies id='82'/>
}

export default Task01;
