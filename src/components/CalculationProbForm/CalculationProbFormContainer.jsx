import { useEffect } from "react"
import { compose } from "redux";
import { connect } from 'react-redux';
import { startCalculation} from '../../redux/calculationProb-reducer';
import CalculationProbForm from "./CalculationProbForm"

const CalculationProbFormContainer = (props) => {
    useEffect( () => {

    })
    return <>
    <CalculationProbForm startCalculation={props.startCalculation}/>
    </>
}

let mapStateToProps = (state) => {
    return {
    }   
}

export default compose(
    connect(mapStateToProps, {startCalculation}))
    (CalculationProbFormContainer);