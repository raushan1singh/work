import React, { useCallback, useMemo, useState } from "react";

const UseCallBack = () =>{
    const [data, update] = useState(0);

    const Test = () =>{
        update(data + 1);
    }

        function msg(x){
            console.log("hello msg");
            x();
        }

    function testing(){
        console.log("hello testing");
    }

    msg(testing);

    return(
        <>
            {data}
            <button type="button" onClick={Test}>Click</button>
        </>
    );
}

export default UseCallBack;