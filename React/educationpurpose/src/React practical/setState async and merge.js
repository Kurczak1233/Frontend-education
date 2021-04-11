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
    solution = () => {
        //NIe przekazujemy bezpośrednio obiektu {}, lecz przekazujemy funkcje anonimową strzałkową.
        //Zwracny jest jeden obiekt.
        this.setState(prevState => ({
            counter: prevState.counter+1
        }))
        this.setState(prevState => ({
            counter: prevState.counter+2
        }))
        this.setState(prevState => ({
            counter: prevState.counter+3
        }))
        console.log(this.state.counter);// 0 Bo jest ASYNC!

    }
    render()
    {
        return(<h1>{this.state.counter}</h1>) //3 Bo MERGUJE i NADPISUJE przez ostatnią! W poprawnym solution 6.
    }
}