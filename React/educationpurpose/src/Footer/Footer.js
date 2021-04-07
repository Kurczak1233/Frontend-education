import React from 'react';
import './Footer.css';

function Footer(props)
{
    return(
        //JSX
        <div class="">  
            <footer>
                <ul>
                    <li>Regulamin</li>
                    <li>FAQ</li>
                    <li>O nas</li>
                    <li>{props.email}</li>
                    <li>{props.CompanyData.name}</li>
                </ul> 
            </footer>
        </div>

    );
}

export default Footer;