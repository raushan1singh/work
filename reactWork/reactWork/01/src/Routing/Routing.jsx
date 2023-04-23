import React from "react";
import {Routes,Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Error404 from "./Error404";

const Routing = () =>{
    return(
        <>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="about" element={<About/>} />
                <Route path="services/:name" element={<Services/>} />
                <Route path="*" element={<Error404/>} />
            </Routes>
        </>
    );
}

export default Routing;