import React, { useState } from "react";
import { compose } from "redux";
import { getCalculations,  getCalculationResultInfoById } from '../../../redux/mainProb-reducer';
import { connect } from 'react-redux';
import { Button, Tabs } from 'antd';
import s from './ResultsProb.module.css';
import { useParams } from 'react-router-dom';
import { Collapse, Tooltip, Divider, Row } from 'antd';
import ResultInfo from "./ResultInfo";
import ResultTable from "./ResultTable";
import GraphicProbability from "./GraphicProbability";

const { TabPane } = Tabs;

const ResultsProbContainer = (props) => {
    
    const params = useParams();
    const calculationId = params.id;
    let index = props.calculations?.calculations.findIndex(item => item.id == calculationId);

    return <div className={s.full}>
        <Divider >Результаты расчета "{props.calculations?.calculations[index]?.name}" </Divider>
        <div className={s.graphics}>
            <ResultInfo calculations={props.calculations}/>
            <ResultTable calculationResults={props.calculationResults}/>
            
            <div className={s.graphic}>
                <GraphicProbability calculationResults={props.calculationResults}
                    measure=' МВт' name='Предельный переток' />
            </div>
        </div>
        <div className={s.parameters}>
           
        </div>
    </div>
    
}

let mapStateToProps = (state) => {
    return {
        calculationResults: state.mainProbPage.calculationResults,
        calculations: state.mainProbPage.calculations
    }
}

export default compose(
    connect(mapStateToProps, { getCalculations,  getCalculationResultInfoById }))
    (ResultsProbContainer);

//     <div className={s.graphic}>
//     <GraphicProcessed calculationResultInfo={props.calculationResultInfo.powerFlowResultProcessed}
//         measure=' мВт' />
// </div>
// <div className={s.graphic}>
//     <GraphicInit calculationResultInfo={props.calculationResultInfo.powerFlowResults}
//         measure=' МВт' name='Предельный переток' />
// </div>