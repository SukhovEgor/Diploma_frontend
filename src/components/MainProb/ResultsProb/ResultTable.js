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
            align: "center"
        },
        {
            title: 'Вероятность излишней работы УРОВ',
            dataIndex: 'probability',
            key: 'probability',
            align: "center"
        }
    ]
    const data = []
    if (resultArray.length > 1) {
        for (let i = 0; i < resultArray.length; i++) {

            data.push(
                {
                    key: resultArray[i].implementationId,
                    time: resultArray[i].urovValue * 1000 + " мс",
                    probability: (resultArray[i].probabilityValue * 100).toFixed(2) + "%"
                })
        }
    }


    return (
        <Table columns={columns} dataSource={data} pagination={{pageSize: 6}} bordered = {true}/>
    )
}

export default ResultTable;