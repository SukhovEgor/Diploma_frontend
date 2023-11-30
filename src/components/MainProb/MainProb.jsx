import ResultsProb from "./ResultsProb/ResultsProb";
import CalculationsProbContainer from "./СalculationsProb/CalculationsProbContainer";
import './MainProb.css';

const MainProb = (props) => {
    return (
        <div className="mainProb">
            <div className="calculations">
                <div className="full">
                    <CalculationsProbContainer />
                </div>
                <div>
                    <ResultsProb />
                </div>
            </div>
        </div>
    )
}

export default MainProb;