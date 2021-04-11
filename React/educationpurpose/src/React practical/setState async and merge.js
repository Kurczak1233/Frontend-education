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
        this.setState(prevState => ({ //Arugment z lambda function
            counter: prevState.counter+1 //Zwaracący obiekt
        }))
        this.setState(prevState => ({
            counter: prevState.counter+2
        }))
        this.setState(prevState => ({
            counter: prevState.counter+3
        }))
        console.log(this.state.counter);// 0 Bo jest ASYNC!
    }
    notCorrectSolution = () => {
        this.setState(() => ({
            counter: 5
        }))
        this.setState(prevState => ({
            counter: this.counter+1
        }))
        console.log(this.state.counter);// 0 Bo jest ASYNC! A niżej będzie 1, bo odwołujemy się do aktualnego 0 z state.
    }
    render()
    {
        return(<h1>{this.state.counter}</h1>) //3 Bo MERGUJE i NADPISUJE przez ostatnią! W poprawnym solution 6.
    }
}