import { Button, Card, Form, Input, InputNumber, Row, message } from "antd";
import {useNavigate} from "react-router-dom"
import './CalculationProbForm.css'
const CalculationProbForm = (props) => {
    let name = localStorage.getItem('userId');
    console.log(name)
    

    let navigate = useNavigate();

    const onFinish = (values) => {
    console.log('Success:', values);
    props.startCalculation(values);
    message.loading('Расчет начат');
    navigate("/result");
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
                            className="row"
                        >
                            <Form.Item className="time" name="mainRelayTime"
                                rules={[{ required: true, },]}>
                                <InputNumber min={1} max={500} formatter={(value) => `${value}мс`} parser={(value) => value.replace('мс', '')} />
                            </Form.Item>
                            <Form.Item className="stdDev" name="stdDevMainRelayTime" 
                                rules={[{required: true,},]}>
                                <InputNumber min={0} max={100} formatter={(value) => `${value}%`} parser={(value) => value.replace('%', '')} />
                            </Form.Item>
                        </Form.Item>

                        <Form.Item label="Время работы промежуточного реле"
                            className="row">
                            <Form.Item name="intermediateRelayTime"
                                rules={[{ required: true, },]}
                                className="time" >
                                <InputNumber min={0} max={500} formatter={(value) => `${value}мс`} parser={(value) => value.replace('мс', '')} />
                            </Form.Item>
                            <Form.Item name="stdDevIntermediateRelayTime" className="stdDev"
                                rules={[{required: true,},]}>
                                <InputNumber min={0} max={100} formatter={(value) => `${value}%`} parser={(value) => value.replace('%', '')} />
                            </Form.Item>
                        </Form.Item>

                        <Form.Item label="Время отключения своего выключателя"
                            className="row"
                        >
                            <Form.Item name="circuitBreakerTime"
                                rules={[{ required: true, },]}
                                className="time" 
                            >
                                <InputNumber min={1} max={500} formatter={(value) => `${value}мс`} parser={(value) => value.replace('мс', '')} />
                            </Form.Item>
                            <Form.Item
                                name="stdDevCircuitBreakerTime"
                                rules={[{required: true,},]}
                                className="stdDev"
                            >
                                <InputNumber min={0} max={100} formatter={(value) => `${value}%`} parser={(value) => value.replace('%', '')} />
                            </Form.Item>
                        </Form.Item>

                        <Form.Item label="Время срабатывания дискретного входа"
                            className="row"
                        >
                            <Form.Item name="inputTime"
                                rules={[{ required: true, },]}
                                className="time" 
                            >
                                <InputNumber min={0} max={500} formatter={(value) => `${value}мс`} parser={(value) => value.replace('мс', '')} />
                            </Form.Item>
                            <Form.Item
                                name="stdDevInputTime"
                                rules={[{required: true,},]}
                                className="stdDev"
                            >
                                <InputNumber min={0} max={100} formatter={(value) => `${value}%`} parser={(value) => value.replace('%', '')} />
                            </Form.Item>
                        </Form.Item>

                        <Form.Item label="Дополнительное время основной защиты"
                            className="row"
                        >
                            <Form.Item name="additionalTime"
                                rules={[{ required: false, },]}
                                className="time" 
                            >
                                <InputNumber min={0} max={500} formatter={(value) => `${value}мс`} parser={(value) => value.replace('мс', '')} />
                            </Form.Item>
                            <Form.Item
                                name="stdDevAdditionalTime"
                                rules={[{required: false,},]}
                                className="stdDev"
                            >
                                <InputNumber min={0} max={100} formatter={(value) => `${value}%`} parser={(value) => value.replace('%', '')} />
                            </Form.Item>
                        </Form.Item>

                        <Form.Item label="Дополнительное время срабатывания УРОВ"
                            className="row"
                        >
                            <Form.Item name="additionalUROVTime"
                                rules={[{ required: false, },]}
                                className="time" 
                            >
                                <InputNumber min={0} max={500} formatter={(value) => `${value}мс`} parser={(value) => value.replace('мс', '')} />
                            </Form.Item>
                            <Form.Item
                                name="stdDevAdditionalUROVTime"
                                rules={[{required: false,},]}
                                className="stdDev"
                            >
                                <InputNumber min={0} max={100} formatter={(value) => `${value}%`} parser={(value) => value.replace('%', '')} />
                            </Form.Item>
                        </Form.Item>

                        <Form.Item label="Стартовое значение выдержки времени УРОВ" name="initialValueUROV"
                            rules={[{ required: true, },]}>
                            <InputNumber min={50} max={500} formatter={(value) => `${value}мс`} parser={(value) => value.replace('мс', '')} />
                        </Form.Item>

                        <Form.Item label="Конечное значение выдержки времени УРОВ" name="finalValueUROV"
                            rules={[{ required: true, },]}>
                            <InputNumber min={1} max={500} formatter={(value) => `${value}мс`} parser={(value) => value.replace('мс', '')} />
                        </Form.Item>

                        <Form.Item label="Шаг снижения выдержки времени УРОВ" name="stepValue"
                            rules={[{ required: true, },]}>
                            <InputNumber min={1} max={500} formatter={(value) => `${value}мс`} parser={(value) => value.replace('мс', '')} />
                        </Form.Item>

                        <Form.Item label="Количество реализаций" name="implementationQuantity"
                            rules={[{ required: true, },]}>
                            <InputNumber min={1} max={100000} />
                        </Form.Item>
                        <Form.Item name="userId" value={localStorage.getItem('userId')} />
                            
                        <Form.Item wrapperCol={{ offset: 8, span: 16, }}>
                            
                            <Button type="primary" htmlType="submit" style={{ marginTop: '20px' }} name='userId' >
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