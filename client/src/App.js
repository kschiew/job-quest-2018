import React, {Component} from 'react';
import './App.css';
import Joke from './Joke';

class App extends Component {

    constructor() {
        super();
        this.state = {
            jokes: [],
            number: 5
        };

        this.jokeNumHandler = this.jokeNumHandler.bind(this);
    }

    componentWillMount() {
        fetch('http://api.icndb.com/jokes/random/' + this.state.number)
            .then(result => result.json())
            .then(result => result.value)
            .then(result => result.map(data => data.joke))
            .then(data => this.setState({jokes: data}))
    }

    jokeNumHandler = (event) => {
        this.setState({number : event.target.value})
    };

    generateHandler = event => {
        fetch('http://api.icndb.com/jokes/random/' + this.state.number)
            .then(result => result.json())
            .then(result => result.value)
            .then(result => result.map(data => data.joke))
            .then(data => this.setState({jokes: data}))

    };

    render() {
        let jokes = (
            <div>
                {this.state.jokes.map(
                    element => <Joke line={element} />
                )}
            </div>
        );

        console.log(this.state.jokes);
        return (
            <div className="App">
                <h1> Kok's Chuck Norris App</h1>
                <p> This app is so badass it made Chuck Norris cry like a little baby.</p>

                <p> Now, how many Chuck Norris Jokes would you like to generate? </p>
                <input type='text' id="numInput" onChange={this.jokeNumHandler}/>
                <button onClick={this.generateHandler}>Generate</button>

            <hr />

                <p>{this.state.number}</p>
                {jokes}
            </div>
        );
    }
}

export default App;
