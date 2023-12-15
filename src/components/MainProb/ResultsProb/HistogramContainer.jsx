import { useParams } from "react-router-dom";
import Histogram from "./Histogram";
import { Card } from "antd";

const HistogramContainer = (props) => {
    const params = useParams();
    const calculationId = params.id;
    let index = props.calculations?.calculations.findIndex(item => item.id == calculationId);

    let resultArray = props.calculationResults?.calculationResults;
    console.log(resultArray.length)
    if (resultArray.length > 1){

            return <Card>
                {resultArray.map((indexResult) => 
            <Histogram firstHistogram={props.calculations.calculations[index].relayTimeArray}
            secondHistogram = {indexResult.urovTimeArray}
             />)}
            </Card>
        
    }
}

export default HistogramContainer;