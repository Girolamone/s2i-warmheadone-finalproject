import React from 'react';
import { Helmet } from 'react-helmet';
import ArcticChart from '../ArcticChart/ArcticChart';
import './ArcticPage.css'; 

const Arctic = () => {
    return (
        <div>
            <Helmet>
                <title>Warmhead One - Arctic Ice Levels</title>
            </Helmet>
            <div>
                <div className="arctic-info">
                    <h1>Arctic Ice Levels</h1>
                    <p>
                        The Arctic ice levels are a critical indicator of climate change, reflecting the health of polar regions. Over recent decades, the extent of Arctic sea ice has significantly decreased due to rising global temperatures. This reduction in ice cover is primarily driven by increased greenhouse gas emissions, leading to the enhanced greenhouse effect and global warming.
                    </p>
                    <p>
                        The consequences of declining Arctic ice are far-reaching. Reduced ice cover contributes to rising sea levels as polar ice melts and flows into the ocean. It also impacts Arctic ecosystems, affecting species that rely on ice-covered regions for habitat and hunting. Moreover, the loss of ice alters global weather patterns and can exacerbate climate change through feedback mechanisms, such as the reduction in albedo effect.
                    </p>
                    <p>
                        The graph below visualizes the historical trends in Arctic ice levels. By examining this data, we can observe changes in ice extent over time and understand the broader implications of these changes on the climate system. This information is vital for scientists and policymakers to assess the impact of climate change and to formulate strategies for mitigating its effects.
                    </p>
                    <p>
                        Tracking Arctic ice levels helps in monitoring the progress of climate change and the effectiveness of climate action measures. The data presented in this chart is crucial for understanding the dynamics of polar ice and developing informed policies to address the challenges posed by melting ice.
                    </p>
                </div>
                <div className="arctic-chart">
                    <ArcticChart />
                </div>
            </div>
        </div>
    );
};

export default Arctic;