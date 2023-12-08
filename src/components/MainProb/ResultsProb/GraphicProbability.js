import { LineChart, Line, XAxis, YAxis, Tooltip, Legend} from 'recharts';

const GraphicInit = (props) => {
    return <div >
        <div className="chart">
            <LineChart width={560} height={300} data={props.calculationResults} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="urovValue" />
                <YAxis unit={props.measure} />
                <Tooltip />
                <Legend />
                <Line type="momotone" dataKey="probabilityValue" name={props.name} stroke="#8884d8" dot={false} strokeWidth={3} />
            </LineChart>
        </div>
    </div>;
}
export default GraphicInit;