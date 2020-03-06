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