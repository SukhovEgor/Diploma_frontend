import './MainProb.css';
import ResultsProbContainer from "./ResultsProb/ResultsProbContainer";
import CalculationsProbContainer from './СalculationsProb/CalculationsProbContainer';

const MainProb = (props) => {
    return (
        <div className="mainProb">
            <div className="calculations">
                <div>
                    <CalculationsProbContainer />
                </div>
                <div className="graphics">
                    <ResultsProbContainer />
                </div>
            </div>
        </div>
    )
}

export default MainProb;