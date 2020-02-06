import React, {Component} from 'react';

class Joke extends Component {
    constructor(props) {
        super();
    }

    updateFetch = () => {
        fetch('http://api.icndb.com/jokes/random/' + this.props.number)
            .then(result => result.json())
            .then(result => result.value)
            .then(result => result.map(data => data.joke))
            .then(data => this.setState({jokes: data}))
    }

    render() {

        return (
            <div>
                <p>{this.props.line}</p>
            </div>
        )
    }

}

export default Joke;
