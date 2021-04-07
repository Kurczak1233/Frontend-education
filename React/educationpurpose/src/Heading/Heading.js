import React from 'react';
import './Heading.css';

class Heading extends React.Component{ //Prerencje.
    constructor()
    {
        super();
        this.state = {link1: "Link1"};
    }
    render()
    {
        return(
            <div>
                <nav>
                    <ul className="Navigation">
                        <li>{this.props.headerTitle}</li>
                        <li>{this.state.link1}</li>
                        <li>Blog</li>
                        <li>Articles</li>
                    </ul>
                </nav>
            </div>
        ); 
    }
}

export default Heading;