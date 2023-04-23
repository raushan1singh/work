import React from "react";
import {useParams, useLocation } from 'react-router-dom';

const Services = () =>{
    let {name} = useParams();
    const location = useLocation();
    console.log(location);
    return(
        <>
            <p>This is Services/ {name}</p>
            {location.pathname}

            {(location.pathname === "/services/raushan") ? ' hello world' : null}

        </>
    );
}

export default Services;
