import React from 'react';
import { Helmet } from 'react-helmet';
import CO2Chart from '../CO2Chart/CO2Chart';
import './CO2Page.css'; 

const CO2 = () => {
    return (
        <div>
            <Helmet>
                <title>Warmhead One - CO2 Levels</title>
            </Helmet>
            <div>
                <div className="co2-info">
                    <h1>Understanding CO2 Levels</h1>
                    <p>
                        Carbon dioxide (CO2) is a key greenhouse gas contributing to global warming. The levels of CO2 in the atmosphere have been steadily increasing due to human activities such as burning fossil fuels, deforestation, and industrial processes. This rise in CO2 concentrations enhances the greenhouse effect, trapping more heat in the Earth's atmosphere and leading to global temperature increases.
                    </p>
                    <p>
                        The consequences of elevated CO2 levels are profound. Increased CO2 concentrations contribute to rising global temperatures, which can result in more extreme weather events, disruptions to ecosystems, and adverse impacts on human health. Understanding CO2 trends is essential for addressing climate change and developing strategies to reduce greenhouse gas emissions.
                    </p>
                    <p>
                        The graph below visualizes the historical trends in CO2 levels. By analyzing this data, we can observe fluctuations and trends over time, providing insights into how human activities and natural processes affect CO2 concentrations. This information is crucial for scientists and policymakers to make informed decisions about climate action.
                    </p>
                    <p>
                        Monitoring CO2 levels helps track progress in reducing emissions and achieving climate goals. The data presented in this chart is a valuable resource for understanding the broader impacts of CO2 on global climate patterns and developing effective strategies for mitigating climate change.
                    </p>
                </div>
                <div className="co2-chart">
                    <CO2Chart />
                </div>
            </div>
        </div>
    );
};

export default CO2;