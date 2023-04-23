import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./index.css";
import Routing from "./Routing/Routing";
import Nav from "./Routing/Nav";
import { BrowserRouter } from "react-router-dom";
import ToDo2 from "./ToDoList/ToDo2";

const App = () =>{
    return(
        <>
        {/* <BrowserRouter>
        <Nav/>
        <Routing/>
        </BrowserRouter> */}
        <ToDo2/>
        </>
    );
}

export default App;
