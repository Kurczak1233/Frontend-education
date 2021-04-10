import React from 'react';

class App extends React.Component(){
    state ={
        text: "",
    }
    render() {
        return (
        <React.Fragment>
            <button>Dodaj "A"</button>
            <h1>{this.state.text}</h1>
        </React.Fragment>

        )
    }
}

// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById("root"));