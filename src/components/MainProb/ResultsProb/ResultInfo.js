import React from "react";
import { Button, Col, Row, Statistic, Table, Tabs } from 'antd';
import s from './ResultsProb.module.css';
import { useParams } from 'react-router-dom';
import { Tooltip, Divider, Typography } from 'antd';
import TabPane from "antd/es/tabs/TabPane";
const { Text } = Typography;

const ResultInfo = (props) => {
    const params = useParams();
    const calculationId = params.id;
    let index = props.calculations?.calculations.findIndex(item => item.id == calculationId);

    let stdDevMainRelayTime = Math.round(props.calculations?.calculations[index]?.stdDevMainRelayTime * 300);
    let stdDevIntermediateRelayTime = Math.round(props.calculations?.calculations[index]?.stdDevIntermediateRelayTime * 300);
    let stdDevCircuitBreakerTime = Math.round(props.calculations?.calculations[index]?.stdDevCircuitBreakerTime * 300);
    let stdDevAdditionalTime = Math.round(props.calculations?.calculations[index]?.stdDevAdditionalTime * 300);
    let stdDevAdditionalUROVTime = Math.round(props.calculations?.calculations[index]?.stdDevAdditionalUROVTime * 300);
    let stdDevInputTime = Math.round(props.calculations?.calculations[index]?.stdDevInputTime * 300);


    let resultArray = props.calculations?.calculations;
    const columns = [
        {
            title: '',
            dataIndex: 'name',
            key: 'name',
            align: "center"
        },
        {
            title: 'Выдержка времени',
            dataIndex: 'time',
            key: 'time',
            align: "center"
        },
        {
            title: 'Разброс',
            dataIndex: 'stdDev',
            key: 'stdDev',
            align: "center"
        },
    ]
    const data = []
    if (resultArray.length > 0) {
        data.push(
            {
                key: 1,
                name: <Tooltip placement="left" title="Время работы основной защиты рассматриваемого присоединения">ТОЗ: </Tooltip>,
                time: props.calculations?.calculations[index]?.mainRelayTime * 1000 + " мс",
                stdDev: stdDevMainRelayTime + "%"
            },
            {
                key: 2,
                name: <Tooltip placement="left" title="Время срабатывания промежуточного выходного реле устройства РЗА, в котором реализована функция основной защиты">ТСрПрОз: </Tooltip>,
                time: props.calculations?.calculations[index]?.intermediateRelayTime * 1000 + " мс",
                stdDev: stdDevIntermediateRelayTime + "%"
            },
            {
                key: 3,
                name: <Tooltip placement="left" title="Полное время отключения своих выключателей рассматриваемого присоединения">ТОВСв:  </Tooltip>,
                time: props.calculations?.calculations[index]?.circuitBreakerTime * 1000 + " мс",
                stdDev: stdDevCircuitBreakerTime + "%"
            },
            {
                key: 4,
                name: <Tooltip placement="left" title="Дополнительное время основной защиты">ТДоп: </Tooltip>,
                time: props.calculations?.calculations[index]?.additionalTime * 1000 + " мс",
                stdDev: stdDevAdditionalTime + "%"
            },
            {
                key: 5,
                name: <Tooltip placement="left" title="Дополнительное время срабатывания УРОВ">ТДопУРОВ: </Tooltip>,
                time: props.calculations?.calculations[index]?.additionalUROVTime * 1000 + " мс",
                stdDev: stdDevAdditionalUROVTime + "%"
            },
            {
                key: 6,
                name: <Tooltip placement="left" title="Время срабатывания дискретного входа устройства РЗА, в котором реализована функция УРОВ">ТВх_УРОВ: </Tooltip>,
                time: props.calculations?.calculations[index]?.inputTime * 1000 + " мс",
                stdDev: stdDevInputTime + "%"
            },
            {
                key: 7,
                name: <Tooltip placement="left" title="Итоговое время ликвидации короткого замыкания при работе основной защиты">
                    <Text type="success"> ТЛ_КЗО: </Text>
                </Tooltip>,
                time:
                    <Text type="success">
                        {props.calculations?.calculations[index]?.mainRelayTime * 1000 +
                            props.calculations?.calculations[index]?.intermediateRelayTime * 1000 +
                            props.calculations?.calculations[index]?.circuitBreakerTime * 1000 +
                            props.calculations?.calculations[index]?.additionalTime * 1000 +
                            " мс"}
                    </Text>,
                stdDev: ''
            },
            {
                key: 8,
                name: <Tooltip placement="left" title="Исходное время срабатывания УРОВ">
                    <Text type="success">ТСр_УРОВ: </Text>
                </Tooltip>,
                time:
                    <Text type="success">{
                        props.calculations?.calculations[index]?.mainRelayTime * 1000 +
                        props.calculations?.calculations[index]?.intermediateRelayTime * 1000 +
                        props.calculations?.calculations[index]?.additionalUROVTime * 1000 +
                        props.calculations?.calculations[index]?.inputTime * 1000 +
                        props.calculations?.calculations[index]?.initialValueUROV * 1000 +
                        " мс"}
                    </Text>,
                stdDev: ''
            },

        )
    }

    
    return (
        <div className={s.graphic}>

            <Tabs >
                <TabPane tabBarStyle={{marginBottom: 0}} key="1" tab='Время и разброс'>
                    <div style={{ marginRight: 10, marginTop: -10 }}>
                        <Table columns={columns} dataSource={data} pagination={false} bordered={true} size="small" />

                    </div>

                </TabPane>
                <TabPane key="2" tab='Другое'>
                    <Row gutter={16} style={{marginTop: 40}}>
                        <Col span={12} align='center'>
                            <Tooltip placement="left" title="Стартовое значение выдержки времени УРОВ">
                                <Statistic title="ТУРОВ_Нач: " value={props.calculations?.calculations[index]?.initialValueUROV * 1000 + " мс"} />
                            </Tooltip>
                        </Col>
                        <Col span={12} align='center'>
                        <Tooltip placement="left" title="Конечное значение выдержки времени УРОВ">
                            <Statistic title="ТУРОВ_Кон: " value={props.calculations?.calculations[index]?.finalValueUROV * 1000 + " мс"} />  
                        </Tooltip>
                        </Col>
                    </Row>
                    <Row gutter={16} style={{marginTop: 40}}>
                        <Col span={12} align='center'>
                            <Tooltip placement="left" title="Шаг снижения выдержки времени УРОВ">
                                <Statistic title="Шаг: " value={props.calculations?.calculations[index]?.stepValue * 1000 + " мс"} />
                            </Tooltip>
                        </Col>
                        <Col span={12} align='center'>
                        <Tooltip placement="left" title="Количество реализаций случайных величин">
                            <Statistic title="Количество реализаций: " value={props.calculations?.calculations[index]?.implementationQuantity} />  
                        </Tooltip>
                        </Col>
                    </Row>
                </TabPane>
            </Tabs>

        </div>
    )
}
export default ResultInfo
