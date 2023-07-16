import React from "react";
import CoverImg from "../images/katie-zaferes.png"
import Star from "../images/star.png"
export default function Card(props){
    return(
    <section className="card-section">
        {/* {here im manually passing card pic because it is not loading from props } */}
        <div className="card-div">
        <img src={CoverImg} className="card-pic"/>
        <div className="span-div">
            <img src={Star}/>
            <span>{props.stats.rating}</span>
            <span>({props.stats.reviewCount}) • </span>
            <spam>{props.location}</spam>
        </div>
            <p>{props.title}</p>
            <p><span>{props.price}</span>/person</p> 
        </div>
    </section>
    );
}