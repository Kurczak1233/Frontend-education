import React from 'react'

class ComponentLife extends React.Component{
    constructor(props)
    {
        super(props)
        console.log("wywołanyConstructor") // First always
        this.state = {
            number: 0
        }
    }
    componentDidMount() 
    {
        console.log("wywołanyDidMount")//Last rendered (when everything ready)
        this.setState({
            number: 1
        })
    }
    componentDidUpdate()
    {
        console.log("wywołanyUpdated")//Renderd when component was updated.
    }
    render()
    {
        console.log("wywołąanyRender")//Whenever initalize or update
        return (null)
    }
}