import React from "react";

const ToList = (props) =>{
    return(
        <>
            <li>{props.list} <span className="close" onClick={() =>{props.select(props.id)}}>
            <i class="fa fa-close"></i>
            </span></li>
        </>
    );
}

export default ToList;