import React from 'react';
import { Helmet } from 'react-helmet';
import NO2Chart from '../NO2Chart/NO2Chart';
import './NO2Page.css'; 

const NO2 = () => {
    return (
        <div>
            <Helmet>
                <title>Warmhead One - NO₂ Levels</title>
            </Helmet>              
            <div className="no2-info">
                <h1>Understanding NO₂ Levels</h1>
                <p>
                    Nitrogen dioxide (NO₂) is a significant air pollutant that impacts both environmental and human health. It is primarily produced from combustion processes, such as those occurring in vehicles, power plants, and industrial facilities. NO₂ is a byproduct of burning fossil fuels and contributes to the formation of ground-level ozone and particulate matter, which can exacerbate air quality issues.
                </p>
                <p>
                    High levels of NO₂ can have severe implications for the environment. It contributes to the formation of acid rain, which can damage ecosystems, including forests and water bodies. Acid rain can lead to soil degradation, harm aquatic life, and negatively impact vegetation. Additionally, NO₂ plays a role in the depletion of the ozone layer, which protects the Earth from harmful ultraviolet (UV) radiation.
                </p>
                <p>
                    For human health, exposure to elevated NO₂ levels can be detrimental. It can irritate the respiratory system, causing symptoms such as coughing, wheezing, and shortness of breath. Long-term exposure may lead to chronic respiratory conditions, such as asthma and reduced lung function. Vulnerable groups, including children, the elderly, and individuals with pre-existing respiratory conditions, are at higher risk of experiencing adverse health effects.
                </p>
                <p>
                    The graph below provides a visual representation of NO₂ levels over time. By analyzing this graph, we can track variations in NO₂ concentrations and observe trends in air quality. The data shown helps identify periods of increased pollution and assess the effectiveness of air quality management strategies.
                </p>
                <p>
                    Monitoring NO₂ levels through such graphs allows policymakers and environmental agencies to make informed decisions regarding air quality regulations and pollution control measures. Understanding these data trends is crucial for implementing effective strategies to reduce NO₂ emissions and improve public health.
                </p>
                <p>
                    Continued tracking and analysis of NO₂ levels will aid in recognizing pollution patterns and addressing sources of emissions. This information is vital for developing sustainable practices and enhancing air quality to ensure a healthier environment and population.
                </p>
            </div>
            <div className="no2-chart">
                <NO2Chart />
            </div>
        </div>
    );
};

export default NO2;