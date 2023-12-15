import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid} from 'recharts';

const GraphicInit = (props) => {
    let resultArray = props.calculationResults?.calculationResults;
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
            <LineChart width={1010} height={450} data={data} margin={{ top: 5, right: 30, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis unit='%' />
                <Tooltip />
                <Legend />
                <Line type="momotone" dataKey="probability" name='Вероятность излишней работы УРОВ' stroke="#158078" dot={false} strokeWidth={3} />
            </LineChart>
        </div>
    </div>;
}
export default GraphicInit;