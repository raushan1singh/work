import React, { useState } from "react";
import ToList from "./ToList";

const ToDo = () =>{
    const [value, updateValue] = useState();
    const [data, updateData] = useState([]);

    const Change = (e) =>{
        updateValue(e.target.value);
    }

    const Submit = () =>{
        updateData((oldValue) =>{
            return[...oldValue, value];
        })

        updateValue(" ");
    }

    const remove = (id) =>{
        updateData((oldValue) =>{
            return oldValue.filter((val, ind) =>{
                return id != ind;
            });
        })
    }

    return(
        <>
            <input type="text" name="name" value={value} onChange={Change} />
            <button type="submit" onClick={Submit}>submit</button>

            <ul>
                {
                    data.map((value, index) =>{
                        return(
                            <>
                                <ToList
                                    tittle = {value}
                                    delete = {remove}
                                    id = {index}
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