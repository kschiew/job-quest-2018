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
        const jokeStyle = {
            font: 'ariel',
            fontColor : 'blue',
            fontSize: "36",
            paddingTop: "175px",
            paddingBottom: "175px",
            paddingLeft: '600px',
            paddingRight: '600px',
            cursor: 'pointer'
        };

        return (
            <div>
                <p style={jokeStyle}>
                    <font color="#8b0000" fontSize="30">
                        <strong>
                            {this.props.line}
                        </strong>
                    </font>
                </p>
            </div>
        )
    }

}

//<img src="https://i.imgflip.com/10s86s.jpg" position="absolute" width = "556px" height={"417px "}/>
export default Joke;
