import React from 'react'

class Counter extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {
            sum: 0,
            counter: 0,
        }
    }
    handlerClickPlus = () =>
    {
        this.setState({
            sum: this.state.sum+=1,
            counter: this.state.counter +=1,
        })
    }
    handlerClickMinus = () =>
    {
        this.setState({
            sum: this.state.sum+=1,
            counter: this.state.counter +=1,
        })
    }
    handlerClickReset = () =>
    {
        this.setState({
            counter: this.state.sum = 0
        })
    render()
    {
    return(
        <React.Fragment>
            <button onClick={this.handlerClickPlus}>+1</button>
            <button onClick={this.handlerClickMinus}>-1</button>
            <button onClick={this.handlerClickReset}>Reset</button>
            <h1>{this.state.sum}</h1>
            <h1>{this.state.counter}</h1>
        </React.Fragment>
    )    
    }
}