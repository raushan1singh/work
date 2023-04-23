import React from "react";

const ToList = (props) =>{
    return(
        <>
            <li>{props.value} <span style={{cursor : 'pointer'}} onClick={() =>props.delete(props.id)}>Delete</span></li>
        </>
    )
}

export default ToList;