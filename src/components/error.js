class FetchExample extends Component {
    state = {
        data: false
    };

    componentDidMount() {
        fetch("https://api.ipify.org").then(r => r.text())
            .then(ip => {
                this.setState({
                    data: ip
                });
            });
    }

    render() {
        if (!this.state.data)
            return <h1>Ustalam adres IP...</h1>

        return <h1>Twoje IP: {this.state.data}</h1>
    }
}



fetch("https://jsonplaceholder.typicode.com/users").then(response => {
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.type);
    console.log(response.url);

    console.log(response.body);
});


fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
    .then(resp => {
        if (resp.ok) {
            return resp.json()
        } else {
            throw new Error("Error during fetching data");
        }
    })
    .then(data => {
        if (data.items && data.items[0] && data.items[0].volumeInfo) {
            this.setState({
                bookData: data.items[0].volumeInfo
            })
        }else{
            this.setState({
                bookData: null
            })
        }
    })
    .catch(err => console.log(err))



















import React, {Component} from "react";

class Main extends Component {
    state = {
        data: [],
        sort: null,

        visibleType: 0,
        allButtons: 5,
        itemsPerPage: 5,
        currentPage: 5,
        active: '',
    };




    changeType = (e, i) => {

        let buttonNumber;
        const typeNumber = parseInt(this.state.data[i].items.length, 10);

        if (typeNumber !== 5 && typeNumber % 5 === 0) {
            buttonNumber = typeNumber / 5;
        } else if (typeNumber === 5) {
            buttonNumber = 0;
        }

        this.setState({
            visibleType: i,
            allButtons: buttonNumber,
            currentPage: 1,
            active: i,
        });
    };

    changeSite = (e, i) => {

        this.setState({
            currentPage: i,
            active: i,
        });
    };

    showButtons = () => {
        let buttons = [];
        for (let i = 1; i <= this.state.allButtons ; i++) {
            buttons.push(
                <button key={i}
                        onClick={(e) => this.changeSite(e,i)}
                        className={`buttonDisplay ${this.state.currentPage === i ? 'active' : ''}`}>{i}</button>
            );
        }
        return buttons;
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






        let buttonList;
        buttonList = this.showButtons();
        const {currentPage, itemsPerPage, visibleType} = this.state;
        const itemArray = this.state.data.items;
        const indexLast = currentPage * itemsPerPage;
        const indexFirst = indexLast - itemsPerPage;
        // const curren = itemArray.slice(indexFirst, indexLast);






        const {data} = this.state;

        return (
            <CompaniesItem data={data} click={this.handleClickId}/>
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









        );
    }
}


export default Main;