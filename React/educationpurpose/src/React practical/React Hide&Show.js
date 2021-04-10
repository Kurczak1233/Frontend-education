import React from 'react'

class Message extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {
            isButtonActive: false 
        }
    }
    handlerClick= () => {
        
        this.setState({
            isActive: !this.state.isButtonActive
        })
    }
    render()
    {
        const text = "lorem"
        return(
        
            <React.Fragment>
                <button onClick={this.handlerClick}>{this.state.isButtonActive ? "Ukryj":"Pokaż"}</button>
                {this.state.isButtonActive ? <p>{text}</p> : null}
            </React.Fragment>
        )
    }
}

ReactDOM.render(<Message />, document.getElementById("root"))