import React from "react";

const Testing = () =>{
    return(
        <>
            <Cred red={Hoc} />
            <Cblue blue={Hoc} />
        </>
    );
}

export default Testing;


const Cred = (props) =>{
    return(
        <>
            <h4 style={{color:'red'}}><props.red/></h4>
        </>
    );
}


const Cblue = (props) =>{
    return(
        <>
            <h4 style={{color:'blue'}}><props.blue/></h4>
        </>
    );
}

const Hoc = () =>{
    return(
        <>
            <h1>Hoc</h1>
        </>
    );
}

