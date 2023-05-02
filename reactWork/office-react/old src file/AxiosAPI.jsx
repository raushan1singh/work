import React, { useEffect, useState } from "react";
import axios from "axios";

const AxiosAPI = () =>{
    const [api, upapi] = useState();

    const covid = async() =>{
        const apidata = await axios.get("https://jsonplaceholder.typicode.com/posts");
        upapi(apidata.data);
    }

    useEffect(() =>{
        covid();
    },[]);

    console.log(api)

    return(
        <>
            <ul style={{listStyle : "none"}}>
                    {
                        api.map((data) =>{
                            return(
                                <>
                                <li>id :- {data.id}</li>
                                <li>tittle :- {data.title}</li>
                                <li>detail :- {data.body}</li>
                                </>
                            )
                        })
                    }
            </ul>
        </>
    );
}

export default AxiosAPI;
