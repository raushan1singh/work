import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () =>{
    const style = {
        listStyle : 'none',
    }

    return(
        <>
        <div className="nav">
            <ul style={style}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/services">Services</NavLink></li>
            </ul>
        </div>
    </>
    );
}

export default Nav;