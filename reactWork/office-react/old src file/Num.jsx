import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {incNumber, decNumber} from "./action/index";
import {ChangeNum} from "./reducer/upDown";

const Num = () =>{

    const mystate = useSelector((state) => state.ChangeNum);
    const dispatch = useDispatch();

    return(
        <>
            <form>
                <button type="button" onClick={() => dispatch(decNumber())} name="desc">-</button>
                <input type="text" value={mystate} name="name"/>
                <button type="button" onClick={() =>dispatch(incNumber())} name="inc">+</button>
            </form>
        </>
    )
}

export default Num;