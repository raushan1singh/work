import React from "react";
import CardProps from "./CardProps";
import data from "./Data";

const Size = {
    background:'red',
    color:'#fff',
    textAlign:'center',
    padding:'10px 0px'
}

const Card = () =>{
    return(
        <>
        <div style={Size}>Series</div>

        <div className="container">
        <div className="row">

           {
            data.map((val, ind) =>{
                return(
                    <>
                        <CardProps
                            img = {val.img}
                            movie = {val.movie}
                            cat = {val.cat}
                        />
                    </>
                )
            })
           }

        </div>
        </div>
        </>
    );
}

export default Card;