import { useParams } from "react-router-dom";
import Histogram from "./Histogram";


const HistogramContainer = (props) => {
    const params = useParams();
    const calculationId = params.id;
    let index = props.calculations?.calculations.findIndex(item => item.id == calculationId);
    let resultArray = props.calculationResults?.calculationResults;
    console.log(resultArray.length)
    if (resultArray.length > 1) {
        return <div>

            {resultArray.map((indexResult) =>
                <Histogram
                    firstHistogram={props.calculations.calculations[index].relayTimeArray}
                    secondHistogram={indexResult.urovTimeArray}
                    urovValue={indexResult.urovValue}

                />)}
        </div>


    }
}

export default HistogramContainer;