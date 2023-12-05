import { Table } from "antd";

const ResultTable = (props) => {
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
const data = [
    {
        key: '1',
        time: ' 300 мс',
        probability: '10%'
    },
    {
        key: '2',
        time: ' 100 мс',
        probability: '20%'
    }
]
return (
    <Table columns={columns} dataSource={data} />
)
}

export default ResultTable;