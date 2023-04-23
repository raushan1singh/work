import React, { useState } from "react";
import ToList2 from "./ToList2";

const hh = {
    display : 'flex',
    justifyContent: 'center',
}
const box = {
    maxWidth : '300px',
    display : 'block',
    margin : '0 auto'
}

const ToDo2 = () =>{
const [list, updatelist] = useState("");
const [data, updata] = useState([]);

const chnage = (e) =>{
    updatelist(e.target.value);
}


const submit = () =>{
    if(list != ""){
    updata((old) =>{
        return[...old, list];
    });
    updatelist('');
}else{
    alert('filled is required');
}
}

const Dlete = (index) =>{
    updata((old) =>{
        return old.filter((vv, vid) =>{
return vid != index;
        })
    });
}

    return(
        <>
        <div style={box}>
            <div style={hh}>
            <input type= "text" onChange={chnage} name="list" value={list} /><br/>
            <button type="submit" onClick={submit} >Submit</button>
            </div>

            <ol>
            {
                data.map((value, ind) =>{
                    return(
                        <>
                        <ToList2
                            vl = {value}
                            dlt = {Dlete}
                            index = {ind}
                        />
                        </>
                    );
                })
            }
            </ol>
        </div>
        </>
    )
}

export default ToDo2;