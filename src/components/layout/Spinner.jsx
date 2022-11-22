import React from "react"
import spinner from "../../assets/loading-buffering.gif"


const Spinner = ( )=>{
    return(
        <>
        <img src={spinner} alt="Loading....."  width={"70px"} style={{margin:"auto"}}/>
        </>
    )
}
export default Spinner