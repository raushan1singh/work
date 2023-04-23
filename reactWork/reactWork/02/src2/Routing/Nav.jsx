import React from "react";
import {Link } from "react-router-dom";

const Nav = () =>{
    const list = {
        display : 'flex',
        listStyle : 'none',
    }

    return(
        <>
            <div>
                <nav className="nav">
                    <ul style={list}>  
                        <li><Link style={{textDecoration:'none'}} to="/">Home</Link></li>
                        <li><Link style={{textDecoration:'none'}} to="/about">About</Link></li>
                        <li><Link style={{textDecoration:'none'}} to="/services">Servies</Link></li>
                        <li><Link style={{textDecoration:'none'}} to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Nav;