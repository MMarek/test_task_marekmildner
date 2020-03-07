import React from "react";

export default class FetchId extends React.Component {
    state = {
        loading: true,
        city: true
    };

    // componentDidMount() {
    //     fetch('https://recruitment.hal.skygate.io/companies')
    //         .then(response => response.json())
    //         .then(data => this.setState({ data }));
    // }   ??



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

// function Temp02() {
//     return <Companies id/>
// }
//
// export default Temp02;
