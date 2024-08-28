import React from "react";
import "./Hero.css";

function Hero() {
    return (
        <section className="hero">
            <div className="hero--box">
                <div className="hero--text">
                    <h1 className="hero--title">
                        Join the Fight Against Climate Change<br />
                        Track and Understand Carbon Emissions and Greenhouse Gases.
                    </h1>
                    <img className="front-logo" src="/frontlogo.png" alt="logo"></img>
                    <p className="hero--description">
                        Discover the impact of CO₂ and methane levels on our planet.<br></br> Our interactive charts and real-time data empower you to make informed decisions and take action for a sustainable future.<br></br> Together, we can drive change and protect our environment.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Hero;