import React from "react";

export default class FetchId extends React.Component {
    state = {
        loading: true,
        city: null
    };

    async componentDidMount() {
        const url = "https://recruitment.hal.skygate.io/companies";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({city: data.results[0] , loading: false});
        // console.log(data.result[0]);
    };

    render() {
        return <div>
            {this.state.loading || !this.state.city ? (
                <div>loading...</div>
            ) : (
                <div>
                    <div>{this.state.city.name.title}</div>
                    <div>{this.state.city.name.first}</div>
                    <div>{this.state.city.name.last}</div>
                </div>
            )}
        </div>
    }
}

// function Task02() {
//     return <Companies id/>
// }
//
// export default Task02;
