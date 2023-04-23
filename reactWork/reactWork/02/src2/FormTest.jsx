import React, { useState } from "react";

const FormTest = () =>{
    const [data, updatedata] = useState({
        name : "",
        message : ""
    });

    const change = (e) =>{
        const {name, value} = e.target;

        updatedata((oldvalue) =>{
            return{
                ...oldvalue,
                [name] : value
            }

        })

    }

    const submit = () =>{
        
    }

    return(
        <>
        {data.name}<br/>{data.message}
            <form>
                <input type="text" name="name" value={data.name}  placeholder="name" onChange={change} /><br/><br/>
                <input type="text" name="message" value={data.message} placeholder="message" onChange={change} /><br/><br/>
                <button type="submit" onClick={submit}>Submit</button>
            </form>
        </>
    );
}

export default FormTest;