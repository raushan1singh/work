import React from "react";

const PosterCard = (props) =>{
    return(
        <>
            <div class="col col-lg-3">
            <div classNameName="card">
            <img src={props.src} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <a href={props.link} className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>
        </>
    );
}

export default PosterCard;