import React from 'react'

class Destructurisation extends React.Component{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        const players = ["Jacek", "Michał", "Adam"];
        let [user1, ...users] = players;
        console.log(user1); //Jacek
        console.log(users); //Michał, Adam
        return(null)
    }
}