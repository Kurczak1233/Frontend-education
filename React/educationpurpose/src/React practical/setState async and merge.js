import React from 'react'

class App extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {
            counter:""
        }
    }
    handleEven = () => {
        this.setState({
            counter: this.state.counter+1
        })
        this.setState({
            counter: this.state.counter+2
        })
        this.setState({
            counter: this.state.counter+3
        })
        console.log(this.state.counter);// 0 Bo jest ASYNC!
    }
    render()
    {
        return(<h1>{this.state.counter}</h1>) //3 Bo MERGUJE i NADPISUJE przez ostatnią!
    }
}