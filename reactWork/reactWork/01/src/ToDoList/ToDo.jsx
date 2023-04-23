import React, { useState } from "react";
import ToList from "./ToList";

const ToDo = () =>{
    const [value, upvalue] = useState();
    const [data, updata] = useState([]);

const Change = (e) =>{
        upvalue(e.target.value);
    }

const Submit = () =>{
    updata((old) => {
        return[...old, value]
    });

    upvalue(" ");
}

const listdelete = (id) =>{
    updata((dv) =>{
        return dv.filter((fval, fid) =>{
            return fid != id;
        });
    })
}

    return(
        <>
        <div>
            <input type="text" name="name" value={value} onChange={Change} />
            <button type="submit" onClick={Submit}>Add</button>
        </div>

        <ul>
            {
                data.map((val, ind) => {
                    return(
                        <>
                            <ToList 
                            value = {val} 
                            delete = {listdelete}
                            id = {ind}
                            />
                        </>
                    )
                })
            }
        </ul>

        </>
    )
}

export default ToDo;