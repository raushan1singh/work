import React from "react";
import { useRef } from "react";

const UseRef = () =>{
    const test = useRef();

    const change = () =>{
        test.current.style.color = 'blue';
        console.log(test);
    }

    return(
        <>
            <input type="text" ref={test}  value="hello" />
            <h1 ref={test}>Raushan</h1>
            <button onClick={change}>click</button>
        </>
    )
}

export default UseRef;