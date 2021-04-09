import React from 'react'

const element = (
    <React.Fragment>
        <section></section>
        <section></section>
    </React.Fragment>
)

const element2 = (
    <div>
        <p id="main" className="red"></p>
    </div>
)
//className to po prostu class
const HandleClick = () => alert("klik!")
const Header = <h1 className="title" onClick={HandleClick}>teatea</h1>
const main = (

    <div>
        <h1>Pierwszy artykuł</h1> 
    </div>
)