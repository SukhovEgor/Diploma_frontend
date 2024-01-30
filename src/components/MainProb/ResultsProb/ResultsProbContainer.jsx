import React, { useState } from "react";
import { compose } from "redux";
import { getCalculations, getCalculationResultInfoById } from '../../../redux/mainProb-reducer';
import { connect } from 'react-redux';
import { ConfigProvider, Tabs } from 'antd';
import s from './ResultsProb.module.css';
import { useParams } from 'react-router-dom';
import {Divider} from 'antd';
import ResultInfo from "./ResultInfo";
import ResultTable from "./ResultTable";
import GraphicProbability from "./GraphicProbability";

import HistogramContainer from "./HistogramContainer";


const { TabPane } = Tabs;

const ResultsProbContainer = (props) => {

    const params = useParams();
    const calculationId = params.id;
    let index = props.calculations?.calculations.findIndex(item => item.id == calculationId);
    
    return <div className={s.full}>
        <Divider >Результаты расчета "{props.calculations?.calculations[index]?.name}" </Divider>
        <div className={s.infoResult}>
            <div className={s.info}>
                <div className={s.table}>
                    <ResultInfo calculations={props.calculations} className={s.graphic} />
                    <div className={s.graphic}>
                        <ResultTable calculationResults={props.calculationResults} calculations={props.calculations?.calculations[index]?.name}/>
                    </div>
                </div>
                <div className={s.graph}>
                    <GraphicProbability calculationResults={props.calculationResults} />
                </div>

            </div>
            <div className={s.scrollcontainer}>            
                <HistogramContainer calculationResults={props.calculationResults} calculations={props.calculations} />
            </div>
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
    connect(mapStateToProps, { getCalculations, getCalculationResultInfoById }))
    (ResultsProbContainer);
