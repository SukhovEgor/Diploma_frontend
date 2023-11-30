import  CalculationProbItem  from './CalculationProbItem';
import { Tabs, List, Input} from 'antd';
import { DeleteOutlined, CloseOutlined  } from '@ant-design/icons';
import s from './Calculations.module.css';

const { Search } = Input;
const { TabPane } = Tabs;

const CalculationsUID = (props) => { 
        
    const calculationReady =[];
        
    for (let i = 0; i<props.calculations?.calculations?.length; i++) {
        calculationReady.push(props.calculations.calculations[i]);
    }

    var readyTabText = 'Расчеты (' + calculationReady.length.toString() + ')';

    const deleteCalculationById = (id) => {
        props.deleteCalculationById(id);
       }

       const onSearch = (value) => console.log(value);
       const operations = <Search placeholder="Поиск" onSearch={onSearch} enterButton style={{width: '170px'}} />;
       
        return <div className={s.full}>
            <Tabs defaultActiveKey="1" tabBarExtraContent={operations}>
                <TabPane tab={readyTabText} key="1">
                    <List itemLayout="horizontal" dataSource={calculationReady} renderItem={(item) => (
                        <List.Item className={s.calculationsItems} key={item.title} actions={[<DeleteOutlined style={{color: 'blue'}} onClick={() => deleteCalculationById(item.id)}>Удалить</DeleteOutlined>]}>
                            <List.Item.Meta
                                title={<CalculationProbItem calculations={item} deleteCalculationById={deleteCalculationById} />}
                                description={item.calculationEnd}
                            />
                            <div className={s.sechName}>{item.calculationStart}</div>
                        </List.Item>)} 
                    />          
                </TabPane>
            <a>edsg</a>
                </Tabs>           
        </div>; 
}
export default CalculationsUID;
