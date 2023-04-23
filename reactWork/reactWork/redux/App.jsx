import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./index.css";
import Store from "./Store";
import { Provider } from "react-redux";
import Hoc2 from "./Hoc2";

const App = () =>{
    return(
        <>
        <Hoc2/>
        <Provider store={Store}>
            {/* <InNum/> */}
        </Provider>
        </>
    );
}

export default App;
