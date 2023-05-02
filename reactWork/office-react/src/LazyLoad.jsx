import React from "react";
import {Suspense, lazy} from "react";
const Clock = lazy(() =>import("./Clock"));

const LazyLoad = () =>{
    return(
        <>
        <h1>Lazy Loading</h1>
        <Suspense  fallback={<h1>Loading profile...</h1>}>
            <Clock/>
        </Suspense>
        </>
    );
}

export default LazyLoad;