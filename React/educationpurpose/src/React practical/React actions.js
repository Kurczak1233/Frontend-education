import React, { Children } from 'react';

class App extends React.Component(){
    constructor()
    {

        super();
    this.state = {
        text: "",
    }
}
    ClickHandler = () =>
    {
        const letter = "a"
        this.setState({
            text: this.state.text + letter,
        });
    }
    render() { 
        return ( //Strukktura tworzy sie ponownie po zmianie stanów!
        <React.Fragment>
            <button onClick={this.ClickHandler}>Dodaj "A"</button>
            <PanelResult text={this.state.text} > bbbb</PanelResult> 
        </React.Fragment>
        )
    }
}

const PanelResult = (props) =>
{
    return(
        <h1>{props.text}:{props.Children}</h1>
    )
}
// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById("root"));