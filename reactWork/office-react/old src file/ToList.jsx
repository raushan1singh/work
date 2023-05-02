import React from "react";

const ToList = (props) =>{
    return(
        <>
            <li>{props.tittle} <span onClick={() =>{props.delete(props.id)}}>x</span></li>
        </>
    )
}

export default ToList;