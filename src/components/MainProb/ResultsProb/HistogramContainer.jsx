import { useParams } from "react-router-dom";
import Histogram from "./Histogram";
import s from './ResultsProb.module.css';

const HistogramContainer = (props) => {
    const params = useParams();
    const calculationId = params.id;

    let index = props.calculations?.calculations.findIndex(item => item.id == calculationId);
    let resultArray = props.calculationResults?.calculationResults;
    
    if (resultArray.length > 1) {
        return <div className={s.histogram}>
            {resultArray.map((indexResult) =>
                <Histogram className={s.histogram}
                    firstHistogram={props.calculations.calculations[index].relayTimeArray}
                    secondHistogram={indexResult.urovTimeArray}
                    urovValue={indexResult.urovValue}

                />)}
        </div>


    }
}

export default HistogramContainer;