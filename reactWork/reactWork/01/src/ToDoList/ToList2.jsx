import React from "react";

const List2 = (props) =>{
    return(
        <>
            <li>{props.vl} <span style={{cursor:'pointer'}} onClick={() =>{
                props.dlt(props.index)
            }} >Delete</span></li>
        </>
    )
}

export default List2;