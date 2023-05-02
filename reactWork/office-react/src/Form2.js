import React, { useState } from "react";

const Form2 = () =>{
    const [data, updata] = useState({
        name : " ",
        message : " "
    });

    const changeEvent = (e) =>{
        const {name, value} = e.target;

        updata((oldvalue) =>{
            return{
                ...oldvalue,
                [name] : value
            }
        })
    }

    console.log(data);
    return(
        <>
        {data.name}<br/>{data.message}<br/>
            <input type="text" name="name" value={data.name} onChange={changeEvent}/><br/><br/>
            <input type="text" name="message" value={data.message} onChange={changeEvent}/><br/><br/>
            <button type="submit">Submit</button>
        </>
    )
}

export default Form2;