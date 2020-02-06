import React, {Component} from 'react';
import './App.css';
import Joke from './Joke';

class App extends Component {

    constructor() {
        super();
        this.state = {
            jokes: [],
            number: 5,
            firstName: "Chuck",
            lastName: "Norris",
        };

        this.jokeNumHandler = this.jokeNumHandler.bind(this);
    }

    componentWillMount() {
        //fetch('http://api.icndb.com/jokes/random/' + this.state.number)
        fetch('http://api.icndb.com/jokes/random/'
            + this.state.number
            + '?firstName='
            + this.state.firstName
            + '&lastName='
            + this.state.lastName)
            .then(result => result.json())
            .then(result => result.value)
            .then(result => result.map(data => data.joke))
            .then(data => this.setState({jokes: data}))
    }

    jokeNumHandler = (event) => {
        this.setState({number : event.target.value})
    };

    generateHandler = event => {
        //fetch('http://api.icndb.com/jokes/random/' + this.state.number)
        fetch('http://api.icndb.com/jokes/random/'
            + this.state.number
            + '?firstName='
            + this.state.firstName
            + '&lastName='
            + this.state.lastName)
            .then(result => result.json())
            .then(result => result.value)
            .then(result => result.map(data => data.joke))
            .then(data => this.setState({jokes: data}))

    };

    firstNameHandler = event => {
        this.setState({
            firstName: event.target.value
        })
    }

    lastNameHandler = event => {
        this.setState({
            lastName: event.target.value
        })
    }

    vanillaHandler = event => {
        this.setState({
            firstName: "Chuck",
            lastName: "Norris",
            number: 1
        }).then(() => this.generateHandler());
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

                <p> First name:</p>
                <input type="text" onChange={this.firstNameHandler} placeholder="e.g. Chuck" />
                <p>Last name:</p>
                <input type="text" onChange={this.lastNameHandler} placeholder="e.g. Norris" />

                <p> Now, how many Chuck Norris Jokes would you like to generate? </p>
                <input type='text' id="numInput" onChange={this.jokeNumHandler} placeholder="e.g. 1"/>
                <br/>
                <button onClick={this.generateHandler}>Generate</button>

                <p onClick={this.vanillaHandler}>Just give me a vanilla Chuck Norris Joke!</p>

                <hr />

                <p>{this.state.number}</p>
                {jokes}
            </div>
        );
    }
}

export default App;
