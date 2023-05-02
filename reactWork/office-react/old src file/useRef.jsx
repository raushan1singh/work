import React, { useRef } from "react";


const Ref = () =>{
    const test = useRef();

    const check = () =>{
        test.current.style.color = "blue";
    }

    return(
        <>
            <input type="text" ref={test} />

            <button type="button" name="submit" onClick={check} >Click</button>
        </>
    );
}

export default Ref;