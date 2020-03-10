import React, {Component} from "react";

class Main extends Component {

    state = {
        data: [],
        sort: null,
        currentPage: 1,
        namesPerPage: 15
    };

    handleClick = (event, i) => {
        this.setState({
            currentPage: i
        })
    };

    handleClickId = () => {
        if (this.state.sort === null) {
            this.setState({sort: 1}); this.sortArrayUp(this.state.data)
        } else if (this.state.sort === 1) {
            this.setState({sort: 2}); this.sortArrayDown(this.state.data)
        } else if (this.state.sort === 2) {
            this.setState({sort: 1}); this.sortArrayUp(this.state.data)
        }
    };

    handleClickName = () => {
        if (this.state.sort === null) {
            this.setState({sort: 1}); this.sortNameUp(this.state.data);
        } else if (this.state.sort === 1) {
            this.setState({sort: 2}); this.sortNameDown(this.state.data)
        } else if (this.state.sort === 2) {
            this.setState({sort: 1}); this.sortNameUp(this.state.data)
        }
    };

    handleClickCity = () => {
        if (this.state.sort === null) {
            this.setState({sort: 1}); this.sortCityUp(this.state.data);
        } else if (this.state.sort === 1) {
            this.setState({sort: 2}); this.sortCityDown(this.state.data)
        } else if (this.state.sort === 2) {
            this.setState({sort: 1}); this.sortCityUp(this.state.data)
        }
    };

    componentDidMount() {
        fetch('https://recruitment.hal.skygate.io/companies')
            .then(response => response.json())
            .then(data => this.setState({data}))
            .catch(err => err.log(err));
    }

    sortArrayUp = (array) => {
        array.sort(function (a, b) {
            return a.id - b.id;
        });
        return array
    };

    sortArrayDown = (array) => {
        array.sort(function (a, b) {
            return b.id - a.id;
        });
        return array
    };

    sortNameUp = (array) => {
        array.sort(function (a, b) {
            return a.name.localeCompare( b.name );
        });
        return array
    };

    sortNameDown = (array) => {
        array.sort(function (a, b) {
            return b.name.localeCompare( a.name );
        });
        return array
    };

    sortCityUp = (array) => {
        array.sort(function (a, b) {
            return a.city.localeCompare( b.city );
        });
        return array
    };

    sortCityDown = (array) => {
        array.sort(function (a, b) {
            return b.city.localeCompare( a.city );
        });
        return array
    };

    render() {

        const {data, currentPage, namesPerPage} = this.state;
        const indexOfLast = currentPage * namesPerPage;
        const indexOfFirst = indexOfLast - namesPerPage;
        const currentData = data.slice(indexOfFirst, indexOfLast);

        const elements = currentData.map((name, i) => {
            return (
                <tr key={name.id}>
                    <th className='button1'>{name.id}</th>
                    <th className='button1'>{name.name}</th>
                    <th className='button1'>{name.city}</th>
                </tr>
            )
        });

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(data.length / namesPerPage); i++) {

                const element = <button key={i}
                                        onClick={e => this.handleClick(e, i)}
                                        className={this.state.currentPage === i ? 'active' : ''}
                >
                    {i} </button>;
                pageNumbers.push(element)

        }

        return (
            <>
                <section>
                    <table>
                        <thead>
                        <tr>
                            <th className='button' onClick={this.handleClickId}>ID</th>
                            <th className='button' onClick={this.handleClickName}>NAME</th>
                            <th className='button' onClick={this.handleClickCity}>CITY</th>
                        </tr>
                        </thead>
                        <tbody>
                        {elements}
                        </tbody>
                    </table>
                    <ul className='numbers'> {pageNumbers} </ul>
                </section>
            </>
        )
    }
}

export default Main;