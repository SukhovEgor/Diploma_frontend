import React from 'react';
import Plot from 'react-plotly.js';

const Histogram = (props) => {
    let resultArray = props.calculationResults?.calculationResults;
    var x1 = props.firstHistogram
    var x2 = props.secondHistogram
    var trace1 = {
        x: x1,
        type: "histogram",
        opacity: 0.5,
        marker: {
            color: 'green',
        },
    };
    var trace2 = {
        x: x2,
        type: "histogram",
        opacity: 0.6,
        marker: {
            color: 'red',
        },
    };
    return <Plot

        data={[trace1, trace2]}
        layout={{ width: 520, height: 440, barmode: "overlay", title: 'A Fancy Plot' }}
    />
}
export default Histogram;

