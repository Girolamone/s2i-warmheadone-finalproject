import React from 'react';
import { Helmet } from 'react-helmet';
import './About.css'; 

const About = () => {
    return (
        <div>
            <Helmet>
                <title>Warmhead One - About Us</title>
            </Helmet>
            <div>
                <div className="about-info">
                    <h1>About Us</h1>
                    <p>
                        Welcome to Warmhead One! We are dedicated to providing insightful data and analyses on climate change and its impacts. Our goal is to increase awareness and understanding of global warming by offering accessible and visual representations of critical environmental data.
                    </p>
                    <p>
                        Our platform features various charts and graphs that illustrate key indicators of climate change, including temperature anomalies, greenhouse gas levels, and ice melt patterns. By presenting this data in an engaging and user-friendly format, we aim to empower individuals and policymakers to make informed decisions and take meaningful action to combat climate change.
                    </p>
                    <p>
                        We believe that knowledge is power, and by making complex climate data comprehensible and visually appealing, we hope to inspire positive change and contribute to a more sustainable future for our planet.
                    </p>
                </div>
                
                <div className="social-icons">
                
                    
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/?size=100&id=118562&format=png&color=000000" alt="Facebook" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/?size=100&id=8HtzWaaC5y60&format=png&color=000000" alt="Twitter" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.icons8.com/?size=100&id=opbLpwZmjYTz&format=png&color=000000" alt="Instagram" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;