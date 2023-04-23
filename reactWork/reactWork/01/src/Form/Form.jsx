import React, { useState } from "react";

const Form = () =>{
    const [data, updata] = useState({
        name : '',
        age : '',
        class : '',
        education : '',
    });

    const change = (e) =>{
        const {name, value} = e.target;

        updata((old) =>{
            return{
                ...old,
                [name] : value
            }
        })
    }

    console.log(data.name);

    return(
        <>
        <div className="form">
            <input type="text" name="name" value={data.name} onChange={change} placeholder="name" /><br/>
            <input type="tel" name="age" value={data.age} onChange={change} placeholder="age" /><br/>
            <input type="text" name="class" value={data.class} onChange={change} placeholder="class" /><br/>
            <input type="text" name="education" value={data.education} onChange={change} placeholder="education" /><br/>
            <button type="submit">Submit</button>
        </div>
        </>
    );
}

export default Form;