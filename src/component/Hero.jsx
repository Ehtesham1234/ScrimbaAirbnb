import React from "react";
import Gridpic from "../images/photo-grid.png"
export default function Hero(){
    return(
    <section className="hero-pic-grid">
        <img src={Gridpic} className="grid-pic"/>
        <h3 className="title-of-exp">Online Experiences</h3>
        <p className="para-of-exp">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </section>
    );
}