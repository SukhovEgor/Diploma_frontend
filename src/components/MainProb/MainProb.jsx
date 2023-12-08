import { useParams } from 'react-router-dom';
import './MainProb.css';
import ResultsProbContainer from "./ResultsProb/ResultsProbContainer";
import CalculationsProbContainer from './СalculationsProb/CalculationsProbContainer';

const MainProb = (props) => {
    const params = useParams();
    const calculationId = params.id;
    return (
        <div className="mainProb">
            <div className="calculations">
                <div>
                    <CalculationsProbContainer />
                </div>
                {calculationId != null ? (
                <div className="graphics">
                    <ResultsProbContainer />
                </div>): null}
            </div>
        </div>
    )
}

export default MainProb;