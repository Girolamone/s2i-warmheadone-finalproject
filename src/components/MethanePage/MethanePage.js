import React from 'react';
import { Helmet } from 'react-helmet';
import MethaneChart from '../MethaneChart/Metanecharts';
import './MethanePage.css'; 

const Methane = () => {
    return (
        <div>
            <Helmet>
                <title>Warmhead One - Methane Levels</title>
            </Helmet>              
            <div className="methane-info">
                <h1>Understanding Methane Levels</h1>
                <p>
                    Methane (CH₄) is a potent greenhouse gas with significant impacts on climate change. It is released during the extraction and transport of fossil fuels, from agricultural activities, and from natural sources such as wetlands. Methane is over 25 times more effective at trapping heat in the atmosphere compared to carbon dioxide (CO₂) over a 100-year period.
                </p>
                <p>
                    Elevated methane levels contribute to global warming by enhancing the greenhouse effect, leading to increased global temperatures. This, in turn, can result in more frequent and severe weather events, such as heatwaves, droughts, and intense storms. Methane emissions from agriculture, particularly from livestock and rice paddies, are also a major source of concern due to their contribution to atmospheric warming.
                </p>
                <p>
                    Methane also poses risks to human health. While it is less toxic compared to other gases, high concentrations of methane can displace oxygen in the air, potentially leading to suffocation. Additionally, methane contributes to the formation of ground-level ozone, which can cause respiratory problems and other health issues.
                </p>
                <p>
                    The graph below provides a visual representation of methane levels over time. By analyzing this graph, we can track variations in methane concentrations and observe trends in emissions. This data helps identify periods of increased methane release and evaluate the effectiveness of mitigation strategies.
                </p>
                <p>
                    Monitoring methane levels through such graphs allows scientists and policymakers to develop informed strategies to reduce methane emissions. Understanding these data trends is crucial for implementing effective measures to address climate change and improve air quality.
                </p>
                <p>
                    Continued analysis of methane levels will help us understand pollution patterns and identify major sources of emissions. This information is essential for crafting policies and initiatives aimed at reducing methane emissions and mitigating their impact on the climate and public health.
                </p>
            </div>
            <div className="methane-chart">
                <MethaneChart />



                
            </div>
        </div>
    );
};

export default Methane;