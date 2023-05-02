import React, { useState } from "react";



const Form = () =>{
    const [data, udata] = useState({
        name : '',
        city : ''
    });

    const [name, updateName] = useState();
    const [city, updateCity] = useState();

    const Change = (e) =>{  
        const {name, value} = e.target;

        udata((arr) =>{
            return {
                ...arr,
                [name] : value
            } 
        });
    }

    const Submit = (e) =>{
        e.preventDefault();

        updateName(data.name);
        updateCity(data.city);
    }


    return(
        <>
        <p>{name}</p>
        <p>{city}</p>
            <form>
                <input type="text" name="name" value={data.name} onChange={Change} /> <br/><br/>
                <select name="city" onChange={Change} value={data.city}>
                    <option>City</option>
                    <option>Patna</option>
                </select><br/><br/>
                <button type="submit" onClick={Submit}  name="submit">Submit</button>
            </form>
        </>
    );
}

export default Form;