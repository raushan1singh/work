import React from "react";
import PosterCard from "./PosterCard";
import PosterData from "./PosterData";

const Poster = () =>{
console.log(PosterData);
    return(
        <>
            <section className="poster">
            <div class="container">
            <div class="row">

            {

                PosterData.map((val) =>{
                    return(
                        <>
                            <PosterCard
                                src = {val.src}
                                name = {val.name}
                                link = {val.link}
                            />
                        </>
                    )
                })
                
            }

            </div>
            </div>
            </section>
        </>
    )
}

export default Poster;