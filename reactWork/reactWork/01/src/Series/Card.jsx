import React from "react";

const Card = (props) =>{
    return(
        <>
<div className="col-lg-3">
<div className="card">
    <img className="card-img-top" src={props.src} style={{width:'100%', height:'350px'}} />
    <div className="card-body">
      <h4 className="card-title">{props.tittle}</h4>
      <p className="card-text">{props.cate}</p>
      <a href="#" className="btn btn-primary">Book Now</a>
    </div>
  </div>
</div>
        </>
    )
}

export default Card;