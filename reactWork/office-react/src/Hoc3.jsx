import React from "react";

const Hoc3 = () =>{
    return(
        <>
            <Red rd={Main} />
            <Blue bl={Main} />
        </>
    )
}


const Red = (props) =>{
    return(
        <>
            <h1 style={{color:'red'}}><props.rd/></h1>
        </>
    )
}

const Blue = (props) =>{
    return(
        <>
            <h1 style={{color:'blue'}}><props.bl/></h1>
        </>
    )
}

const Main = () =>{
    return(
        <>
            <h1>raushan</h1>
        </>
    )
}

export default Hoc3;