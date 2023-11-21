import Calculation from "../CalculationProbForm/CalculationProbForm";
import ResultsProb from "./ResultsProb/ResultsProb";
import CalculationsProb from "./СalculationsProb/CalculationsProb";
import './MainProb.css';

const MainProb = (props) => {
    return (
        <div className="mainProb">
            <div className="calculationsProb">
                <div className="full">
                    <CalculationsProb />
                </div>
                <div>
                    <ResultsProb />
                </div>
            </div>
        </div>
    )
}

export default MainProb;