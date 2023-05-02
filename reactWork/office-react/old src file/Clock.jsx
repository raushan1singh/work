import React, { useEffect, useState } from "react";

const Clock = () =>{

    const ck = {
        color:'orange',
        textTransform:'uppercase',
    }

    let date = new Date().toLocaleTimeString();
    const [value, uvalue] = useState(date);

    const Clock = () =>{
        let date = new Date().toLocaleTimeString();
        uvalue(date);
    }

    setInterval(Clock, 1000);

    return(
    <>
        <h1 style={ck}>Ayushman {value}</h1>
    </>
    );
}

export default Clock;