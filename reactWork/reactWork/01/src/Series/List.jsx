import React from "react";
import Card from "./Card";
import Data from "./Data";

const List = () =>{
    console.log(Data);
    return(
        <>
            <div className="container">
                <div className="row">
                {
                    Data.map((val, id) =>{
                        return(
                            <>
                            <Card
                                src = {val.src}
                                tittle = {val.tittle}
                                cate = {val.cate}
                            />
                            </>
                        )
                    })
                }
                    
                </div>
            </div>
        </>
    )
}

export default List;