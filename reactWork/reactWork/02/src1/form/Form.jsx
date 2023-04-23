import React, { useState } from "react";

const box ={
    display:'block',
    margin: '0 auto',
    width:'500px'
}

const Form = () =>{
    const [data, updatedata] = useState({
        name : '',
        city : ''
    });

    const [name, uname] = useState();
    const [city, ucity] = useState();

    const Change = (e) =>{
        const {name, value} = e.target;

        updatedata((oldvalue) =>{
            return {...oldvalue,
                    [name] : value        
            }
        });
    }

    const Submit = (e) =>{
        e.preventDefault();

        uname(data.name);
        ucity(data.city);

        if(data.name != " "){
            data.name = " ";
        }

        if(data.city != " "){
            data.city = " ";
        }
    }

    return(
        <>
        {name}
        {city}
            <div style={box}>
            <form>
            <input type="text" name="name" value={data.name} onChange={Change}/><br/>
            <select name="city" value={data.city} onChange={Change}>
                <option>Select</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select><br/>
            <button type="submit" onClick={Submit} name="submit">Submit</button>
            </form>
            </div>
        </>
    );
}

export default Form;