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
            this.setState({sort: 1})
        } else if (this.state.sort === 1) {
            this.setState({sort: 2})
        } else if (this.state.sort === 2) {
            this.setState({sort: 1})
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


    render() {

        // const {data} = this.state;


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
                {/*<CompaniesItem data={data} click={this.handleClickId}/>*/}
                <section>
                    {/*<ul className='names'> {elements} </ul>*/}

                    <table>
                        <thead>
                        <tr>
                            <th onClick={this.props.click}>ID</th>
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


class CompaniesItem extends Component {
    render() {

        let data = this.props.data;
        // const {id, name, city} = this.props.data[32];
        return (
            <>
                <table>
                    <thead>
                    <tr>
                        <th onClick={this.props.click}>ID</th>
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

            </>


        );
    }
}


export default Main;