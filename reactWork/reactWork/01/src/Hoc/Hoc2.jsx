import React from "react";

const Hoc2 = () => {
    return(
        <>
            <Green gr={Com} />
            <Yellow yr={Com} />
        </>
    )
}

const Green = (props) =>{
    return(
        <>
            <h1 style={{color : 'green'}}><props.gr/></h1>
        </>
    )
}

const Yellow = (props) =>{
    return(
        <>
            <h1 style={{color : 'yellow'}}><props.yr/></h1>
        </>
    )
}

const Com = () =>{
    return(
        <>
            <h1>hello world</h1>
        </>
    )
}

export default Hoc2;