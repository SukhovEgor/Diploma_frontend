import { Table } from "antd";
import { useParams } from 'react-router-dom';

const ResultTable = (props) => {
const params = useParams();

let index = props.calculationResults?.calculationResults;
console.log(index.length)

const columns = [
    {
        title: 'Выдежка времени УРОВ',
        dataIndex: 'time',
        key: 'time',
    },
    {
        title: 'Вероятность излишней работы УРОВ',
        dataIndex: 'probability',
        key: 'probability',
    }
]
const data = []
if(index.length > 1){
    for (let i = 0; i<index.length; i++){
        
        data.push(
            {
                key: index[i].implementationId,
                time:  index[i].urovValue,
                probability: index[i].probabilityValue
        
            })
    }
}


return (
    <Table columns={columns} dataSource={data} />
)
}

export default ResultTable;