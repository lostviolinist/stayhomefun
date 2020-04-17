import React from 'react';
import './Toolbar.css';
import logo from './logo.png'

const toolbar = props => (
    <nav className="navbar top">
        <span className="logo"><a href="/"> <img src={logo} alt=""/> </a></span>
        
    </nav>
);

export default toolbar;