import React, {Component} from 'react';
import './App.css';
import Joke from './Joke';

class App extends Component {

    constructor() {
        super();
        this.state = {
            jokes: [],
            number: 3,
            firstName: "Chuck",
            lastName: "Norris",
        };

        this.jokeNumHandler = this.jokeNumHandler.bind(this);
    }

    componentDidMount() {
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
    };

    lastNameHandler = event => {
        this.setState({
            lastName: event.target.value
        })
    };

    vanillaHandler = event => {
        this.setState({
            firstName: "Chuck",
            lastName: "Norris",
            number: 1
        });

        this.generateHandler();

        this.setState({
            firstName: "Chuck",
            lastName: "Norris",
            number: 1
        });
    };

    render() {

        let i = 1;
        let jokes = (
            <div>
                {this.state.jokes
                    .map(
                    element => (i++) + ". " + element)
                    .map(
                    element => <Joke line={element} />
                )}
            </div>
        );

        return (
            <div className="App" style={{
                backgroundImage : 'url('
                + 'https://www.pngkey.com/png/detail/110-1105091_chuck-norris-chuck-norris-art-black-and-white.png'
                + ')',
                justifyContent: "center",
                position: 'absolute',
            }}>
                <h1> Kok's Chuck Norris App</h1>
                <p> This app is so badass it made Chuck Norris cry like a little baby.</p>


                <p> How many Chuck Norris Jokes? </p>
                <input type='text' id="numInput" onChange={this.jokeNumHandler} placeholder="e.g. 1"/>

                <p> First name(Optional):</p>
                <input type="text" onChange={this.firstNameHandler} placeholder="e.g. Chuck" />
                <p>Last name(Optional):</p>
                <input type="text" onChange={this.lastNameHandler} placeholder="e.g. Norris" />

                <br/>
                <br/>

                <button onClick={this.generateHandler} >Generate</button>

                <p onClick={this.vanillaHandler} style={{color:"blue", cursor: "pointer"}}>Just give me a vanilla Chuck Norris Joke!</p>

                {jokes}
            </div>
        );
    }
}

export default App;
