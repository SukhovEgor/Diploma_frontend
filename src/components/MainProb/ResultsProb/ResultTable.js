import { Table } from "antd";
import { useParams } from 'react-router-dom';

const ResultTable = (props) => {
    const params = useParams();

    let resultArray = props.calculationResults?.calculationResults;


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
    if (resultArray.length > 1) {
        for (let i = 0; i < resultArray.length; i++) {

            data.push(
                {
                    key: resultArray[i].implementationId,
                    time: resultArray[i].urovValue,
                    probability: resultArray[i].probabilityValue
                })
        }
    }


    return (
        <Table columns={columns} dataSource={data} pagination={{pageSize: 6}}/>
    )
}

export default ResultTable;