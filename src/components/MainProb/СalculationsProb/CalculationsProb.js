import CalculationProbItem from './CalculationProbItem';
import { Tabs, List, Input, ConfigProvider, Flex } from 'antd';
import { DeleteOutlined, CloseOutlined } from '@ant-design/icons';
import s from './Calculations.module.css';
import { useEffect, useState } from 'react';
import { parsePath, useNavigate } from 'react-router-dom';

const { Search } = Input;
const { TabPane } = Tabs;

const CalculationsUID = (props) => {

    const calculationsArray = [];
    for (let i = 0; i < props.calculations?.calculations?.length; i++) {
        calculationsArray.push(props.calculations.calculations[i]);
    }
    let navigate = useNavigate();

    const [state, setState] = useState(props.calculations.calculations)
    useEffect(() => {
        props.getCalculations(localStorage.getItem('userId'));
    }, [state])

    var readyTabText = 'Расчеты (' + props.calculations.calculations.length + ')';

    const deleteCalculationById = (calculationId) => {
        navigate("/result");
        setState(props.deleteCalculationById(calculationId));
    }

    const [value, setValue] = useState('')

    const filteredCalculations = calculationsArray.filter(calculation => {
        return calculation.name.toLowerCase().includes(value.toLowerCase())
    })

    const operations = <Search placeholder="Поиск" onChange={(event) => setValue(event.target.value)} enterButton style={{ width: '170px' }} />;

    return <div className={s.full}>
            <Tabs defaultActiveKey="1" tabBarExtraContent={operations}>
                <TabPane tab={readyTabText} key="1">
                    <List itemLayout="horizontal" dataSource={filteredCalculations} renderItem={(item) => (
                        
                        <List.Item className={s.calculationsItems} key={item.title} actions={[<DeleteOutlined style={{ color: '#4c5c4c' }} onClick={() => deleteCalculationById(item.id)}>Удалить</DeleteOutlined>]}>
                            <List.Item.Meta
                                title={<CalculationProbItem calculations={item} deleteCalculationById={deleteCalculationById} />}
                            />
                            <div className={s.date}>{item.calculationStart}</div>
                            </List.Item>)}
                    />
                </TabPane>
            </Tabs>
            </div>;
}
export default CalculationsUID;
