import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer} from 'recharts';
import s from './ResultsProb.module.css';

const GraphicInit = (props) => {
    let resultArray = props.calculationResults?.calculationResults;
    const data = []
    const dataProbability = []
    if (resultArray.length > 1) {
        for (let i = 0; i < resultArray.length; i++) {

            data.push(
                {
                    time: resultArray[i].urovValue * 1000,
                    probability: (resultArray[i].probabilityValue * 100).toFixed(2)
                })
            dataProbability.push((resultArray[i].probabilityValue * 100).toFixed(2))
        }
    }
    let maxValue = Math.round(Math.max.apply(null, dataProbability));
    return <div className={s.chart} >
        <ResponsiveContainer width="100%" height="100%">
            <LineChart width={900} height={450} data={data} margin={{ top: 15, right: 30, left: -10, bottom: -20 }}>
            <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" unit = ' мс' />
                <YAxis unit='%' domain={[0, maxValue + 5]} type="number" />
                <Tooltip />
                <Legend />
                <Line type="momotone" dataKey="probability"  name='Вероятность излишней работы УРОВ' stroke="#158078" dot={false} strokeWidth={3} />
            </LineChart>
            </ResponsiveContainer>
        </div>
    
}
export default GraphicInit;