import React from "react";
import { increment, decrement } from "./action/Index";
import { useDispatch, useSelector} from "react-redux";

const InNum = () =>{
    const mystate = useSelector((State) =>State.ChangeNum);
    const dispatch = useDispatch();
    return(
        <>
            <div>
                <button onClick={() =>dispatch(decrement(5))}>-</button>
                <input type="text" value={mystate} name="name" />
                <button onClick={() =>dispatch(increment(5))}>+</button>
            </div>
        </>
    )
}

export default InNum;