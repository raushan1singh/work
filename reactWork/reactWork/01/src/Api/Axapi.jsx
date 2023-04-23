import React, { useEffect, useState } from "react";
import axios from "axios";

const Axapi = () =>{

    const [data, updatedata] = useState();
   
   const api = async() =>{
    const covid = await axios.get("https://api.rootnet.in/covid19-in/stats/latest");
    updatedata(covid.data.data.regional);
   }

   useEffect(() =>{
    api();
   },[])

   return(
    <>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <table className="table">
        <thead>
            <tr>
                <th>#</th>
                <th>confirmedCasesIndian</th>
                <th>discharged</th>
                <th>loc</th>
                <th>totalConfirmed</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((val, ind) =>{
                    return(
                        <>
                            <tr>
                                <td>{ind}</td>
                                <td>{val.confirmedCasesIndian}</td>
                                <td>{val.discharged}</td>
                                <td>{val.loc}</td>
                                <td>{val.totalConfirmed}</td>
                            </tr>
                        </>
                    )
                })
            }
        </tbody>
    </table>
                </div>
            </div>
        </div>
    </>
   )

}

export default Axapi;