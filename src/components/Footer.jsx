import React from 'react';
import './footer.css';

const Footer = () => {
return (
    <div className="footer-section">
        <div className="footer-heading">
            <h1 className='footer-heading_text text-xl font-bold'>
                Spencer Grewe's Portfolio Website
            </h1>
            <span className='footer-text font-bold'>
                <p><a href= 'https://www.linkedin.com/in/spencer-grewe-820a87157/' style={{color: '#ff9c69'}}>Linkedin</a> </p>
                <p><a href= 'https://github.com/sbgrewe' style={{color: '#ff9c69'}}> Github</a></p>
                <p><a href= 'mailto:spencer.grewe@gmail.com' style={{color: '#ff9c69'}}> Email</a></p>
            </span>
            <p className='footer-text'>
                2023-2023.
            </p>
            <p className='footer-text'>
                Created in React, JS, HTML, CSS. Deployed using Github Pages.
            </p>
        </div>
    </div>

)
}

export default Footer;