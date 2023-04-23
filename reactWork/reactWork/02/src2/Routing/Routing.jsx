import React from "react";
import Nav from "./Nav";
import { BrowserRouter } from "react-router-dom";
import Menu from "./Menu";

const Routing = () =>{
    return(
        <>
        <BrowserRouter>
            <Nav/>
            <Menu/>
        </BrowserRouter>
        </>
    );
}

export default Routing;