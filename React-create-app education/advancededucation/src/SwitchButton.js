import React from 'react'

const SwitchButton = props => 
{
    return (
        <div className="text-center"><button onClick={props.click}>{props.active ? "Show" : "Hide"}</button></div>
    )
}

export default SwitchButton