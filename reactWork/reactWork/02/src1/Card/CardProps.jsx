import React from "react";

const CardProps = (props) =>{
    return(
        <>
            <div className="col-12 col-md-3 col-lg-3">
            <div class="card card_img" style={{textAlign:'center'}}>
                <img  src={props.img} className="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{props.movie}</h5>
                    <p class="card-text">{props.cat}</p>
                    <a href="#" class="btn btn-primary">Book Ticket</a>
                </div>
                </div>
            </div>
        </>
    );
}


export default CardProps;