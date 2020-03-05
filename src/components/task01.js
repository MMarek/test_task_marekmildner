import React, {Component} from "react";


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
        fetch('https://recruitment.hal.skygate.io/companies')
            .then(response => {
                console.log(response.id);
                console.log(response.name);
                console.log(response.city);
            })
        .catch(err => err.log(err))
    }


    render() {
        return (
            <Companies onSearch={this.showId}/>
        )
    }
}

// class TableForm extends Component {
//
// }



function Task01() {
    return <Companies id='82'/>
}

export default Task01;
