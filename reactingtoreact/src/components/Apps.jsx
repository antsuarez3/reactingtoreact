

// import React from 'react';

// function App(props) {
//     // let element = <h1>Welcome to React</h1>
//     // return element;
//     return <h1>Hello, {props.name}!</h1>
// }

// export default App;

import React, { Component } from 'react';


class App extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            text: 'Anthony',
            closingMsg: "Why won't React react?",
            textInput: '',
            hasLoaded: false
        }
    }

    handleClick(e) {
        this.setState({
            hasLoaded: true
        });
    }

    onInputChange = (value) => {
        this.setState({ textInput: value });
    }

    render() {
        if (this.state.hasLoaded) {
            return(
                 <React.Fragment>
                    <h1>Hello {this.state.text}! {this.state.closingMsg}</h1>
                    <input
                        placeholder='Give me them inputs'
                        value={this.state.textInput}
                        onChange={(event) => this.onInputChange(event.target.value)}
                    />
                   
                </React.Fragment>
            )
        } else {
           
            return (
                <React.Fragment>

             
                  <h1>Loading...</h1>
                   <button onClick={this.handleClick}>Click Me</button>   
                   </React.Fragment>
            )
          
        }
    }
}

export default App;