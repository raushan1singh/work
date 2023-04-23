import React, { useEffect, useState } from "react";
import axios from 'axios';

const Api = () =>{
    const [record, uprecord] = useState();

    const covid = async() =>{
        const data = await axios.get("https://api.rootnet.in/covid19-in/stats/latest");
        const actualdata = data.data.data.regional;
        uprecord(actualdata);
    }

    useEffect(() =>{
        covid();
    }, [])

    return(
        <>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Case</th>
      <th scope="col">Loc</th>
      <th scope="col">Discharged</th>
    </tr>
  </thead>
  <tbody>
        {
            record.map((val, ind) =>{
                return(
                    <>
                    <tr>
                    <td>{val.confirmedCasesIndian}</td>
                    <td>{val.loc}</td>
                    <td>{val.discharged}</td>
                    </tr>
                    </>
                )
            })
        }
    
  </tbody>
</table>
        </>
    )
}

export default Api;