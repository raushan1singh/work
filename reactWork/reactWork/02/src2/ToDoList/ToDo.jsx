import React, { useState } from "react";
import ToList from "./ToList";

const ToDo = () => {
    const [data, updatedata] = useState();
    const [vl, updatevl] = useState([]);

    const changeEvent = (e) =>{
        updatedata(e.target.value);
    }

    const add = (event) =>{
        event.preventDefault();

        updatevl((oldvalue) =>{
            return[...oldvalue, data];
        })

        updatedata("");
    }

    const remove = (id) =>{
        updatevl((oldvalue) =>{
            return oldvalue.filter((val, ind) =>{
                return ind != id;
            })
        })
    }
    
    return (
        <>
            <div className="mainbox">
            <div className="todo">
                <input type="text" name="name" value={data} onChange={changeEvent} /><br/>
                <button className="btn btn-primary" type="submit" onClick={add} >submit</button>
            </div>
                <ol>
                {
                    vl.map((val, index) =>{
                        return(
                            <>
                                <ToList
                                    list = {val}
                                    select = {remove}
                                    id = {index}
                                />
                            </>
                            )
                        })
                    }
                </ol>
            </div>
            
        </>
    )
}

export default ToDo;