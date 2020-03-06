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