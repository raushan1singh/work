import React, { useEffect, useState } from "react";

const Fetch = () =>{

    const [data, updatedata] = useState();
   
   const api = async() =>{
    const covid = await fetch("https://api.rootnet.in/covid19-in/stats/latest");
    const acdata = await covid.json();
    updatedata(acdata.data.regional);
   }

   useEffect(() =>{
    api();
   },[]);


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

export default Fetch;