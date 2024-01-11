import { Button, Card, Divider, Form, Input, InputNumber, Row, Statistic, Switch, Tooltip, message } from "antd";
import { useNavigate } from "react-router-dom"
import './CalculationProbForm.css'
import { useState } from "react";
const CalculationProbForm = (props) => {
    let name = localStorage.getItem('userId');
    console.log(name)


    let navigate = useNavigate();

    const onFinish = (values) => {
        values.userId = localStorage.getItem('userId');
        if (!values.stdDevIntermediateRelayTime){
            values.stdDevIntermediateRelayTime = values.stdDevMainRelayTime;
            values.stdDevAdditionalTime = values.stdDevMainRelayTime;
            values.stdDevAdditionalUROVTime = values.stdDevMainRelayTime;
            values.stdDevCircuitBreakerTime = values.stdDevMainRelayTime;
            values.stdDevInputTime = values.stdDevMainRelayTime;
        }

        console.log(values.stdDevMainRelayTime)
        console.log('Success:', values);
        props.startCalculation(values);
        message.loading('Расчет начат');
        navigate("/result");
    };
    
    const [state, setState] = useState(false);
    console.log(state);
    const onChange = (checked) => {
        setState(checked);
    };

    return (
        <div>
            <Row type="flex" justify='center' align='middle' style={{ minHeight: '89vh' }}>
                <Card className="form">
                    <h4 style={{ textAlign: 'center' }}>Исходные данные</h4>
                    <Form name="basic" labelCol={{ span: 12 }}
                        wrapperCol={{ span: 14 }} autoComplete="off" onFinish={onFinish} size="default"
                        initialValues={{
                            name: '',
                        }}>

                        <Form.Item label="Название расчета" name="name" rules={[{
                            required: true, message: 'Введите название расчета',
                        },]}>
                            <Input.TextArea />
                        </Form.Item>

                        <Form.Item label="Время работы основной защиты"
                            className="row" rules={[{ required: true, },]}
                        >
                            <Form.Item className="time" name="mainRelayTime"
                                rules={[{ required: true, message: 'Введите значение времени' },]}>
                                <InputNumber min={1} max={500} suffix='мс' />
                            </Form.Item>
                            <Form.Item className="stdDev" name="stdDevMainRelayTime"
                                rules={[{ required: true, message: 'Введите разброс'},]}>
                                <InputNumber min={0} max={100} placeholder="Разброс" suffix='%' />
                            </Form.Item>
                            <Tooltip placement="right" title="Единый разброс">
                                <Switch onChange={onChange} />
                            </Tooltip>
                        </Form.Item>

                        <Form.Item label="Время работы промежуточного реле"
                            className="row">
                            <Form.Item name="intermediateRelayTime"
                                rules={[{ required: true, message: 'Введите значение времени' },]}
                                className="time" >
                                <InputNumber min={0} max={500} suffix='мс' />
                            </Form.Item>
                            {state &&
                                <Form.Item name="stdDevIntermediateRelayTime" className="stdDev">
                                    <InputNumber min={0} max={100} disabled placeholder="Разброс" suffix='%' />
                                </Form.Item>}
                            {!state &&
                                <Form.Item name="stdDevIntermediateRelayTime" className="stdDev" rules={[{ required: true, message: 'Введите разброс'},]}>
                                    <InputNumber min={0} max={100} placeholder="Разброс" suffix='%' />
                                </Form.Item>}
                        </Form.Item>

                        <Form.Item label="Время отключения своего выключателя"
                       
                            className="row"
                            
                        >
                            <Form.Item name="circuitBreakerTime"
                                rules={[{ required: true, message: 'Введите значение времени' },]}
                                className="time"
                            >
                                <InputNumber min={1} max={500} suffix='мс' />
                            </Form.Item>
                            {state &&
                                <Form.Item
                                    name="stdDevCircuitBreakerTime"
                                    className="stdDev"
                                >
                                    <InputNumber min={0} max={100} disabled placeholder="Разброс" suffix='%' />
                                </Form.Item>}
                            {!state &&
                                <Form.Item
                                    name="stdDevCircuitBreakerTime"
                                    rules={[{ required: true, message: 'Введите разброс'},]}
                                    className="stdDev"
                                >
                                    <InputNumber min={0} max={100} placeholder="Разброс" suffix='%' />
                                </Form.Item>}
                        </Form.Item>

                        <Form.Item label="Время срабатывания дискретного входа"
                            className="row"
                        >
                            <Form.Item name="inputTime"
                                rules={[{ required: true, message: 'Введите значение времени' },]}
                                className="time"
                            >
                                <InputNumber min={0} max={500} suffix='мс' />
                            </Form.Item>
                            {state &&
                                <Form.Item
                                    name="stdDevInputTime"

                                    className="stdDev"
                                >
                                    <InputNumber min={0} max={100} disabled placeholder="Разброс" suffix='%' />
                                </Form.Item>}
                            {!state &&
                                <Form.Item
                                    name="stdDevInputTime"
                                    rules={[{ required: true, message: 'Введите разброс'},]}
                                    className="stdDev"
                                >
                                    <InputNumber min={0} max={100} placeholder="Разброс" suffix='%' />
                                </Form.Item>}
                        </Form.Item>

                        <Form.Item label="Дополнительное время основной защиты"
                            className="row"
                        >
                            <Form.Item name="additionalTime"
                                rules={[{ required: false, },]}
                                className="time"
                            >
                                <InputNumber min={0} max={500} suffix='мс' />
                            </Form.Item>
                            {state &&
                                <Form.Item
                                    name="stdDevAdditionalTime"

                                    className="stdDev"
                                >
                                    <InputNumber min={0} max={100} disabled placeholder="Разброс" suffix='%' />
                                </Form.Item>}
                            {!state &&
                                <Form.Item
                                    name="stdDevAdditionalTime"
                                    rules={[{ required: false, },]}
                                    className="stdDev"
                                >
                                    <InputNumber min={0} max={100} placeholder="Разброс" suffix='%' />
                                </Form.Item>}
                        </Form.Item>

                        <Form.Item label="Дополнительное время срабатывания УРОВ"
                            className="row"
                        >
                            <Form.Item name="additionalUROVTime"
                                rules={[{ required: false, },]}
                                className="time"
                            >
                                <InputNumber min={0} max={500} suffix='мс' />
                            </Form.Item>
                            {state &&
                                <Form.Item
                                    name="stdDevAdditionalUROVTime"
                                    className="stdDev"
                                >
                                    <InputNumber min={0} max={100} disabled placeholder="Разброс" suffix='%' />
                                </Form.Item>}
                            {!state &&
                                <Form.Item
                                    name="stdDevAdditionalUROVTime"
                                    rules={[{ required: false, },]}
                                    className="stdDev"
                                >
                                    <InputNumber min={0} max={100} placeholder="Разброс" suffix='%' />
                                </Form.Item>}
                        </Form.Item>

                        <Form.Item label="Стартовое значение выдержки времени УРОВ" name="initialValueUROV"
                            rules={[{ required: true, message: 'Введите значение времени' },]}>
                            <InputNumber min={50} max={500} suffix='мс' />
                        </Form.Item>

                        <Form.Item label="Конечное значение выдержки времени УРОВ" name="finalValueUROV"
                            rules={[{ required: true, message: 'Введите значение времени' },]}>
                            <InputNumber min={1} max={500} suffix='мс' />
                        </Form.Item>

                        <Form.Item label="Шаг снижения выдержки времени УРОВ" name="stepValue"
                            rules={[{ required: true, message: 'Введите шаг' },]}>
                            <InputNumber min={1} max={500} suffix='мс' />
                        </Form.Item>

                        <Form.Item label="Количество реализаций" name="implementationQuantity"
                            rules={[{ required: true, message: 'Введите количество реализаций' },]}>
                            <InputNumber min={1} max={100000} />
                        </Form.Item>
                  
                        <Form.Item wrapperCol={{ offset: 8, span: 16, }}>
                        <Button type="primary" htmlType="submit" style={{ marginTop: '20px' }}>
                                Начать расчет
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Row>

        </div>
    )
}

export default CalculationProbForm;