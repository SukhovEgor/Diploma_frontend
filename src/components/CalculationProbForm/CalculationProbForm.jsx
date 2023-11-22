import { Card, Form, Input, InputNumber, Row } from "antd";
import './CalculationProbForm.css'
const CalculationProbForm = () => {
    return (
        <div>
            <Row type="flex" justify='center' align='middle' style={{ minHeight: '89vh' }}>
                <Card className="form">
                    <h4 style={{ textAlign: 'center' }}>Исходные данные</h4>
                    <Form name="basic" labelCol={{ span: 12 }}
                        wrapperCol={{ span: 14 }} autoComplete="off" size="default"
                        initialValues={{
                            name: '',
                        }}>

                        <Form.Item label="Название расчета" name="name" rules={[{
                            required: true, message: 'Введите название расчета',
                        },]}>
                            <Input.TextArea />
                        </Form.Item>

                        <Form.Item label="Время работы основной защиты" 
                            style={{
                                marginBottom: 0,
                            }}
                        >
                            <Form.Item name="timeMainRelay"
                                rules={[{required: true,},]}
                                style={{
                                    display: 'inline-block',
                                    width: 'calc(30% - 8px)',
                                }}
                            >
                                <InputNumber min={1} max={500} formatter={(value) => `${value}мс`} parser={(value) => value.replace('мс', '')}/>
                            </Form.Item>
                            <Form.Item
                                name="stdDevMainRelay"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                                style={{
                                    display: 'inline-block',
                                    width: 'calc(30% - 8px)',
                                    margin: '0 8px',
                                }}
                            >
                                <InputNumber min={1} max={100} formatter={(value) => `${value}%`} parser={(value) => value.replace('%', '')} />
                            </Form.Item>
                        </Form.Item>

                        <Form.Item label="Время работы промежуточного реле" 
                            style={{
                                marginBottom: 0,
                            }}
                        >
                            <Form.Item name="timeIntermediateRelay"
                                rules={[{required: true,},]}
                                style={{
                                    display: 'inline-block',
                                    width: 'calc(30% - 8px)',
                                }}
                            >
                                <InputNumber min={1} max={500} formatter={(value) => `${value}мс`} parser={(value) => value.replace('мс', '')}/>
                            </Form.Item>
                            <Form.Item
                                name="stdDevIntermediateRelay"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                                style={{
                                    display: 'inline-block',
                                    width: 'calc(30% - 8px)',
                                    margin: '0 8px',
                                }}
                            >
                                <InputNumber min={1} max={100} formatter={(value) => `${value}%`} parser={(value) => value.replace('%', '')} />
                            </Form.Item>
                        </Form.Item>

                        <Form.Item label="Время отключения своего выключателя" 
                            style={{
                                marginBottom: 0,
                            }}
                        >
                            <Form.Item name="timeCircuitBreaker"
                                rules={[{required: true,},]}
                                style={{
                                    display: 'inline-block',
                                    width: 'calc(30% - 8px)',
                                }}
                            >
                                <InputNumber min={1} max={500} formatter={(value) => `${value}мс`} parser={(value) => value.replace('мс', '')}/>
                            </Form.Item>
                            <Form.Item
                                name="stdDevCircuitBreaker"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                                style={{
                                    display: 'inline-block',
                                    width: 'calc(30% - 8px)',
                                    margin: '0 8px',
                                }}
                            >
                                <InputNumber min={1} max={100} formatter={(value) => `${value}%`} parser={(value) => value.replace('%', '')} />
                            </Form.Item>
                        </Form.Item>

                        <Form.Item label="Время срабатывания дискретного входа" 
                            style={{
                                marginBottom: 0,
                            }}
                        >
                            <Form.Item name="inputTime"
                                rules={[{required: true,},]}
                                style={{
                                    display: 'inline-block',
                                    width: 'calc(30% - 8px)',
                                }}
                            >
                                <InputNumber min={1} max={500} formatter={(value) => `${value}мс`} parser={(value) => value.replace('мс', '')}/>
                            </Form.Item>
                            <Form.Item
                                name="stdDevInputTime"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                                style={{
                                    display: 'inline-block',
                                    width: 'calc(30% - 8px)',
                                    margin: '0 8px',
                                }}
                            >
                                <InputNumber min={1} max={100} formatter={(value) => `${value}%`} parser={(value) => value.replace('%', '')} />
                            </Form.Item>
                        </Form.Item>

                        <Form.Item label="Дополнительное время основной защиты" 
                            style={{
                                marginBottom: 0,
                            }}
                        >
                            <Form.Item name="timeAdditional"
                                rules={[{required: true,},]}
                                style={{
                                    display: 'inline-block',
                                    width: 'calc(30% - 8px)',
                                }}
                            >
                                <InputNumber min={1} max={500} formatter={(value) => `${value}мс`} parser={(value) => value.replace('мс', '')}/>
                            </Form.Item>
                            <Form.Item
                                name="stdDevTimeAdditional"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                                style={{
                                    display: 'inline-block',
                                    width: 'calc(30% - 8px)',
                                    margin: '0 8px',
                                }}
                            >
                                <InputNumber min={1} max={100} formatter={(value) => `${value}%`} parser={(value) => value.replace('%', '')} />
                            </Form.Item>
                        </Form.Item>

                        <Form.Item label="Дополнительное время срабатывания УРОВ" 
                            style={{
                                marginBottom: 0,
                            }}
                        >
                            <Form.Item name="timeAdditionalUROV"
                                rules={[{required: true,},]}
                                style={{
                                    display: 'inline-block',
                                    width: 'calc(30% - 8px)',
                                }}
                            >
                                <InputNumber min={1} max={500} formatter={(value) => `${value}мс`} parser={(value) => value.replace('мс', '')}/>
                            </Form.Item>
                            <Form.Item
                                name="stdDevAdditionalUROV"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                                style={{
                                    display: 'inline-block',
                                    width: 'calc(30% - 8px)',
                                    margin: '0 8px',
                                }}
                            >
                                <InputNumber min={1} max={100} formatter={(value) => `${value}%`} parser={(value) => value.replace('%', '')} />
                            </Form.Item>
                        </Form.Item>

                        <Form.Item label="Стартовое значение выдержки времени УРОВ" name="initialValueUROV"
                                rules={[{required: true,},]}>
                                <InputNumber min={1} max={500} formatter={(value) => `${value}мс`} parser={(value) => value.replace('мс', '')}/>
                        </Form.Item>

                        <Form.Item label="Конечное значение выдержки времени УРОВ" name="finalValueUROV"
                                rules={[{required: true,},]}>
                                <InputNumber min={1} max={500} formatter={(value) => `${value}мс`} parser={(value) => value.replace('мс', '')}/>
                        </Form.Item>

                        <Form.Item label="Шаг снижения выдержки времени УРОВ" name="stepUROV"
                                rules={[{required: true,},]}>
                                <InputNumber min={1} max={500} formatter={(value) => `${value}мс`} parser={(value) => value.replace('мс', '')}/>
                        </Form.Item>

                        <Form.Item label="Количество реализаций" name="ImplementationQuantity"
                                rules={[{required: true,},]}>
                                <InputNumber min={1} max={100000} />
                        </Form.Item>








                    </Form>
                </Card>
            </Row>
        </div>
    )
}

export default CalculationProbForm;