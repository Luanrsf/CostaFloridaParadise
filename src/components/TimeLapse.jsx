import React from "react";
import TimeLapseFull from "../assets/TimelapseFull.MP4";
import "../pages/home/style.css";
const TimeLapse =()=>{
    return(
    <video autoPlay loop muted src={TimeLapseFull} className='TimeLapse'>
    </video>)
}
export default TimeLapse;