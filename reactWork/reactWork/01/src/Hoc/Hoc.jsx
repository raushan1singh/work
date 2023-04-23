import React, { useState } from "react";

const Hoc = () => {
    return (
        <>
            <Red ch={Change} />
            <Blue dd={Change} />
        </>
    );
}

const Red = (props) =>{
    return(
        <>
            <h2  style={{color:'red'}}><props.ch/></h2>
        </>
    )
}

const Blue = (props) =>{
    return(
        <>
            <h2  style={{color:'blue'}}><props.dd/></h2>
        </>
    )
}

const Change = () => {
    const [value, upvalue] = useState(0);

    const minus = () =>{
        upvalue(value - 1);
    }

    const add = () =>{
        upvalue(value + 1);
    }

    return (
        <>
            <div style={{display:'flex'}}>
                <button onClick={minus}>-</button>
                <h2>{value}</h2>
                <button onClick={add}>+</button>
            </div>
        </>
    );
}

export default Hoc;