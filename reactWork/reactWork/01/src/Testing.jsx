import React from "react";

const Testing = (props) =>{
    return(
        <>
           <p>{props.name}</p>
           <button type="button" onClick={props.comp} >cc</button>
        </>
    );
    
}

export default Testing;