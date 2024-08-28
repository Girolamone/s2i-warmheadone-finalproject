import React from 'react';
import { Helmet } from 'react-helmet';
import TemperatureChart from '../TemperatureChart/Temperaturechart';
import './TemperaturePage.css';

const Temperature = () => {
    return (
        <div>
            <Helmet>
                <title>Warmhead One - Temperatures</title>
            </Helmet>              
            <div className="temperature-info">
                <h1>Temperatures Wiki</h1>
                <p>
                    Global temperatures are a critical indicator of ongoing climate change. Rising temperatures are a direct result of increased greenhouse gas emissions, primarily from human activities such as burning fossil fuels, deforestation, and industrial processes. These activities enhance the greenhouse effect, trapping more heat in the Earth's atmosphere and leading to a gradual increase in average global temperatures.
                </p>
                <p>
                    This temperature increase has significant implications for our planet. Higher temperatures can lead to more frequent and severe weather events, including heatwaves, storms, and heavy rainfall. It can also result in melting polar ice caps and glaciers, contributing to rising sea levels that threaten coastal communities and ecosystems. Additionally, higher temperatures can disrupt ecosystems, affecting wildlife and plant species, and impact human health by increasing the prevalence of heat-related illnesses.
                </p>
                <p>
                    The graph below provides a visual representation of temperature anomalies over time. By analyzing this graph, we can observe how temperatures have deviated from historical averages. The data shown can help identify trends and patterns in temperature changes, offering valuable insights into the progression of climate change.
                </p>
                <p>
                    Monitoring these anomalies allows scientists and policymakers to make informed decisions and implement strategies to mitigate the impacts of rising temperatures. Understanding the data provided by this chart is crucial for developing effective climate action plans and raising awareness about the urgent need to address climate change.
                </p>
                <p>
                    As we continue to track these temperature anomalies, we gain a clearer picture of how our climate is evolving and the actions needed to protect our planet for future generations. The insights derived from this data are vital for crafting policies and strategies aimed at reducing greenhouse gas emissions and adapting to the changing climate.
                </p>
            </div>
            <div className="temperature-chart">
                <TemperatureChart />
            </div>
        </div>
    );
};

export default Temperature;