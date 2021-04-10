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
    ClickHandler = () => {
        this.setState({
            value: ""
        })
    }
    InputChanged = (e) => {
        this.setState({
            value: e.state.text
        })
    }
    render(){
        return(
            <React.Fragment>
                <input placeholder="Wpisz" value={this.state.value} onChange={this.InputChanged} type="text"></input>
                <button onClick={this.ClickHandler}>Reset</button>
                <h1>{this.state.text}</h1>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<Input/>, document.getElementById("root"))