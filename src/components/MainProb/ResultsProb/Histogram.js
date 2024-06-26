import React from 'react';
import Plot from 'react-plotly.js';
import s from './ResultsProb.module.css';
const Histogram = (props) => {

    var x1 = props.firstHistogram
    var x2 = props.secondHistogram

    var trace1 = {
        x: x1,
        type: "histogram",
        name: "Тл_кзо",
        opacity: 0.5,
        marker: {
            color: "#7ba05b",
        },
    };
    var trace2 = {
        x: x2,
        type: "histogram",
        name: "Тл_кз уров",
        opacity: 0.6,
        marker: {
            color: 'red',
        },
    };
    return <Plot  className={s.oneHistogram}

        data={[trace1, trace2]}
        layout={{
            legend: { "orientation": "h" },
            barmode: "overlay",
            title: "Tуров = " + props.urovValue * 1000 + "мс",
        }}
        
        config={{ displaylogo: false, displayModeBar: false, responsive: true}}
    />
}
export default Histogram;

