import React, { useEffect, useState } from "react";

const box = {
    display : "block",
    textAlign : "center"
}

const UseEffect = () =>{
    const [data, updatedata] = useState(0);
    const [num, updatenum] = useState(0);

const inc = () =>{
    updatedata(data + 1)
}

const desc = () =>{
    updatedata(data - 1)
}

const inc2 = () =>{
    updatenum(num + 1)
}

const desc2 = () =>{
    updatenum(num - 1)
}

useEffect(() =>{
    alert("Hello World");
}, [num]);

    return(
        <>
            <div style={box}>
                <button type="submit" onClick={desc}>-</button>
                <input type="text" value={data} name="name"/>
                <button type="submit" onClick={inc}>+</button>

                <button type="submit" onClick={desc2}>-</button>
                <input type="text" value={num} name="name"/>
                <button type="submit" onClick={inc2}>+</button>
            </div>
        </>
    );
}

export default UseEffect;