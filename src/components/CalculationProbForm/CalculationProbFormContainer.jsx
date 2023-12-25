import { useEffect } from "react"
import { compose } from "redux";
import { connect } from 'react-redux';
import { startCalculation} from '../../redux/calculationProb-reducer';
import CalculationProbForm from "./CalculationProbForm"
import { whoAmI, setUser } from "../../redux/auth-reducer";

const CalculationProbFormContainer = (props) => {
    useEffect( () => {

    })
    return <>
    <CalculationProbForm startCalculation={props.startCalculation} whoAmI={props.setUser}/>
    </>
}

let mapStateToProps = (state) => {
    return {
    }   
}

export default compose(
    connect(mapStateToProps, {startCalculation, whoAmI, setUser}))
    (CalculationProbFormContainer);