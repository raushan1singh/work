import react, { useCallback, useMemo, useState } from "react";
import Testing from "./Testing";

const CallBack = () =>{
    const [value, upvalue] = useState(0);

    const Plus = () =>{
        upvalue(value + 1);
    }


    return(
        <>
            {value}<br/>
            <button type="button" onClick={Plus}>Plus</button>
        </>
    );
}

export default CallBack;