import React from "react";
import { compose } from "redux";
import { getCalculations } from '../../../redux/mainProb-reducer';
import { connect } from 'react-redux';
import { Button, Tabs } from 'antd';
import s from './ResultsProb.module.css';
import { useParams } from 'react-router-dom';
import { Collapse, Tooltip, Divider, Row } from 'antd';

const { TabPane } = Tabs;

const ResultsProbContainer = (props) => {

    const params = useParams();
    const calculationId = params.id;
    let index = props.calculations?.calculations.findIndex(item => item.id == calculationId);
    let stdDevMainRelayTime = Math.round(props.calculations?.calculations[index]?.stdDevMainRelayTime * 300);
    let stdDevIntermediateRelayTime = Math.round(props.calculations?.calculations[index]?.stdDevIntermediateRelayTime * 300);
    let stdDevCircuitBreakerTime = Math.round(props.calculations?.calculations[index]?.stdDevCircuitBreakerTime * 300);
    let stdDevAdditionalTime = Math.round(props.calculations?.calculations[index]?.stdDevAdditionalTime * 300);
    let stdDevAdditionalUROVTime = Math.round(props.calculations?.calculations[index]?.stdDevAdditionalUROVTime * 300);
    let stdDevInputTime = Math.round(props.calculations?.calculations[index]?.stdDevInputTime * 300);

    return <div className={s.full}>
        <Divider >Результаты расчета "{props.calculations?.calculations[index]?.name}" </Divider>
        <div className={s.graphics}>

        </div>
        <div className={s.parameters}>
            <div className={s.graphic}>
                <Divider >Параметры расчета</Divider>
                <ul>
                    <Tooltip placement="left" title="Время работы основной защиты рассматриваемого присоединения">
                        <li>Тоз: <Button>{props.calculations?.calculations[index]?.mainRelayTime * 1000} мс</Button>
                            <Button>{stdDevMainRelayTime} %</Button>
                        </li>
                    </Tooltip>
                    <Tooltip placement="left" title="Время срабатывания промежуточного выходного реле устройства РЗА, в котором реализована функция основной защиты">
                        <li>ТСрПрОз: <Button>{props.calculations?.calculations[index]?.intermediateRelayTime * 1000} мс</Button>
                            <Button>{stdDevIntermediateRelayTime} %</Button>
                        </li>
                    </Tooltip>
                    <Tooltip placement="left" title="Полное время отключения своих выключателей рассматриваемого присоединения">
                        <li>ТОВСв: <Button>{props.calculations?.calculations[index]?.circuitBreakerTime * 1000} мс</Button>
                            <Button>{stdDevCircuitBreakerTime} %</Button>
                        </li>
                    </Tooltip>
                    <Tooltip placement="left" title="Дополнительное время основной защиты">
                        <li>ТДоп: <Button>{props.calculations?.calculations[index]?.additionalTime * 1000} мс</Button>
                            <Button>{stdDevAdditionalTime} %</Button>
                        </li>
                    </Tooltip>
                    <Tooltip placement="left" title="Дополнительное время срабатывания УРОВ
">
                        <li>ТДопУРОВ: <Button>{props.calculations?.calculations[index]?.additionalUROVTime * 1000} мс</Button>
                            <Button>{stdDevAdditionalUROVTime} %</Button>
                        </li>
                    </Tooltip>
                    <Tooltip placement="left" title="Время срабатывания дискретного входа устройства РЗА, в котором реализована функция УРОВ">
                        <li>ТВх_УРОВ: <Button>{props.calculations?.calculations[index]?.inputTime * 1000} мс</Button>
                            <Button>{stdDevInputTime} %</Button>
                        </li>
                    </Tooltip>
                </ul>
                <Divider color="dark"></Divider>
                <ul>
                    <Tooltip placement="left" title="Стартовое значение выдержки времени УРОВ">
                        <li>ТУРОВ_Нач: <Button>{props.calculations?.calculations[index]?.initialValueUROV * 1000} мс</Button></li>
                    </Tooltip>
                    <Tooltip placement="left" title="Конечное значение выдержки времени УРОВ">
                        <li>ТУРОВ_Кон: <Button>{props.calculations?.calculations[index]?.finalValueUROV * 1000} мс</Button></li>
                    </Tooltip>
                    <Tooltip placement="left" title="Шаг снижения выдержки времени УРОВ">
                        <li>Шаг: <Button>{props.calculations?.calculations[index]?.stepValue * 1000} мс</Button></li>
                    </Tooltip>
                    <Tooltip placement="left" title="Количество реализаций случайных величин">
                        <li>Количество реализаций: <Button>{props.calculations?.calculations[index]?.implementationQuantity}</Button></li>
                    </Tooltip>
                </ul>
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
    connect(mapStateToProps, { getCalculations }))
    (ResultsProbContainer);

//     <div className={s.graphic}>
//     <GraphicProcessed calculationResultInfo={props.calculationResultInfo.powerFlowResultProcessed}
//         measure=' мВт' />
// </div>
// <div className={s.graphic}>
//     <GraphicInit calculationResultInfo={props.calculationResultInfo.powerFlowResults}
//         measure=' МВт' name='Предельный переток' />
// </div>