import React from 'react'

class ItemList extends React.Component{
    state = {
        item1: "coś",
        item2: "coś2",
    }
    render(){
        return (
            <React.Fragment>
                <h1>Lista cosi</h1>
                <ul>
                <ItemList name={this.state.item1}></ItemList>
                <ItemList name={this.state.item2}></ItemList>
                </ul>
            </React.Fragment>



        )
    }
}

const ItemList = (props) => {
    return(
        <li>{props.name}</li>
    )
}