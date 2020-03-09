import React, {Component} from "react";

class Main extends Component {


    state = {
        data: [],
        sort: null,

        currentPage: 1,
        namesPerPage: 20
    };

    handleClick = (event, i) => {
        this.setState({
            currentPage: i
        })
    };

    handleClickId = () => {
        if (this.state.sort === null) {
            this.setState({sort: 1}); this.sortArrayUp(this.state.data,'id')
        } else if (this.state.sort === 1) {
            this.setState({sort: 2}); this.sortArrayDown(this.state.data,'id')
        } else if (this.state.sort === 2) {
            this.setState({sort: 1}); this.sortArrayUp(this.state.data,'id')
        }
    };

    componentDidMount() {
        fetch('https://recruitment.hal.skygate.io/companies')
            .then(response => response.json())
            // .then(response => {console.log(response)})
            .then(data => this.setState({data}))
            .catch(err => err.log(err));
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.state.sort);
    }

    sortArrayUp = (array, value) => {
        array.sort(function (a, b, value) {
            return a.value - b.value;
        });
        return array
    };

    sortArrayDown = (array, value) => {
        array.sort(function (a, b, value) {
            return b.value - a.value;
        });
        return array
    };

    render() {

        const {data, currentPage, namesPerPage} = this.state; // destrukturyzacja do paginacji
        const indexOfLast = currentPage * namesPerPage;
        const indexOfFirst = indexOfLast - namesPerPage;
        const currentData = data.slice(indexOfFirst, indexOfLast);

        const elements = currentData.map((name, i) => {
            return (

                <tr key={name.id}>
                    <th>{name.id}</th>
                    <th>{name.name}</th>
                    <th>{name.city}</th>
                </tr>
            )
        });

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(data.length / namesPerPage); i++) {
            {
                const element = <button key={i}
                                        onClick={e => this.handleClick(e, i)}
                                        className={this.state.currentPage === i ? 'active' : ''}
                >
                    {i} </button>;
                pageNumbers.push(element)
            }
        }


        return (
            <>
                <section>

                    <table>
                        <thead>
                        <tr>
                            <th onClick={this.handleClickId}>ID</th>
                            <th>NAME</th>
                            <th>CITY</th>
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