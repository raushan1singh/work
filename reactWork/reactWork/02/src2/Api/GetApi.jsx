import React, { useEffect, useState } from "react";
import axios from 'axios';

const GetApi = () =>{
    const [record, uprecord] = useState();

    const covid = async() =>{
        const data = await fetch("https://api.rootnet.in/covid19-in/stats/latest");
        const res = await data.json();
        const actualdata = res.data.regional;
        uprecord(actualdata);
        console.log(actualdata);
    }

    useEffect(() =>{
        covid();
    }, [])

    return(
        <>
                        <table class="table">
  <thead>
    <tr>
    <th scope="col">Sr. No.</th>
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
                    <td>{ind}</td>
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

export default GetApi;