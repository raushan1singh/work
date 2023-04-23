import { useEffect, useState } from "react";
import axios from "axios";

const AxiosApi = () =>{

    const [data, updata] = useState();

    useEffect(() =>{
        const covid = async() =>{
            const res = await axios.get("https://data.covid19india.org/data.json");
            const actualData = res.data.statewise;
            console.log(actualData);
            updata(actualData);
        }

        covid();
    },[]);

    return(
        <>
            <table style={{border:'1px solid #000'}}>
                {
                    data.map((val, ind) =>{
                        return(
                            <>
                     <tr>
                    <td>{val.active}</td>
                    <td>shadfas</td>
                    <td>shadfas</td>
                    <td>shadfas</td>
                     </tr>
                            </>
                        )
                    })
                }
            </table>
        </>
    );
}

export default AxiosApi;