import React from 'react'
//Kontrolowany
class Message extends React.Component{
constructor(props)
{
    super(props)
    this.state = {
        city:""
    }
}
handleChange = e => {
    this.setState({
        text: e.target.value, // Dla standardowego inputa tekstowego
        checked: e.target.checked, //Dla Radio i checkboxów
    })
}
handleSubmit = e => {
    e.PreventDefault()
    this.setState({
        state: e.input.value
    })
}
    render()
{
    return(
        <form onSubmit={this.handleSubmit}>
            <input value={this.state.city} type="text" placeholder="type..." />
            <button type="submit">Submit</button>
        </form>
    )
}

}
//Niekontrolowany 
class Message2 extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {
            city:""
        }
    }
    handleSubmit = e => {
        e.PreventDefault()
        this.setState({
            state: e.input.value
        })
    }
        render()
    {
        return(
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.city} type="text" placeholder="type..." />
                <button type="submit">Submit</button>
            </form>
        )
    }
    
    }