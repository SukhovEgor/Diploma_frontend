//import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';


const Histograms = (props) => {
    let resultArray = props.calculationResults?.calculationResults[0].histogramData;
    const data = []
    if (resultArray.length > 1) {
        for (let i = 0; i < resultArray.length; i++) {

            data.push(
                {
                    time: resultArray[i].urovValue * 1000,
                    probability: resultArray[i].probabilityValue * 100
                })
        }
    }
    return <div >
        <div className="chart">
            <BarChart width={560} height={300} data={props.calculationResults?.mainTimeHistogramData} margin={{ top: 5, right: 30, left: 20, bottom: 5, }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="interval" unit={props.measure}>
                </XAxis>
                <YAxis unit=" %">
                    <Label value={"Вероятность"} position="left" angle={-90} style={{ textAnchor: "middle" }} />
                </YAxis>
                <Tooltip />
                <Legend />
                <Bar dataKey="height" name="Вероятность вхождения в диапазон" fill="#8884d8" />

            </BarChart>
            <BarChart width={560} height={300} data={props.calculationResults?.calculationResults[0].histogramData} margin={{ top: 5, right: 30, left: 20, bottom: 5, }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="interval" unit={props.measure}>
                </XAxis>
                <YAxis unit=" %">
                    <Label value={"Вероятность"} position="left" angle={-90} style={{ textAnchor: "middle" }} />
                </YAxis>
                <Tooltip />
                <Legend />
                <Bar dataKey="height" name="Вероятность вхождения в диапазон" fill="#8884d8" />
            </BarChart>
        </div>
    </div>;
}
export default Histograms;