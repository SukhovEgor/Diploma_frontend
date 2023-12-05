import React, { useEffect } from "react";
import { compose } from "redux";
import { getCalculations, getCalculationResultInfoById, deleteCalculationById } from '../../../redux/mainProb-reducer';
import { connect } from 'react-redux';
import CalculationsProb from './CalculationsProb';
import { Spin } from 'antd';
import { useParams } from 'react-router-dom';

const CalculationsProbContainer = (props) => {

    const params = useParams();
    const calculationId = params.id;

    useEffect(() => {
        props.getCalculations();
        if (calculationId) {
            props.getCalculationResultInfoById(calculationId);
        }
    }, [calculationId])

    return <>
        <div>
            <CalculationsProb calculations={props.calculations} deleteCalculationById={props.deleteCalculationById} />
        </div>
        {(props.calculations.calculations[0]?.id == 'iyk') && (<Spin />)}
    </>
}

let mapStateToProps = (state) => {
    return {
        calculations: state.mainProbPage.calculations
    }
}

export default compose(
    connect(mapStateToProps, { getCalculations, getCalculationResultInfoById, deleteCalculationById }))
    (CalculationsProbContainer);
