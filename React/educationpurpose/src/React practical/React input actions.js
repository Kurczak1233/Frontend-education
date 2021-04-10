/* eslint-disable no-undef */
import React from 'react'

class Input extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {
            text: ""   
        } 
    }
    clickHandler = () => {
        this.setState({
            text: "" //Opisuje zmianę tekstową
        })
    }
    inputChanged = (e) => {
        this.setState({
            text: e.state.text
        })
    }
    render(){
        return(
            <React.Fragment>
                <input placeholder="Wpisz" value={this.state.value} onChange={this.handleChange} type="text"></input>
                <button onClick={this.handleClick}>Reset</button>
                <h1>{this.state.text}</h1>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<Input/>, document.getElementById("root"))