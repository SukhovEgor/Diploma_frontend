import { Table, FloatButton, Tooltip, Radio } from "antd";
import ExportJsonExcel from 'js-export-excel';
import { useState } from "react";
import { useParams } from 'react-router-dom';

const ResultTable = (props) => {
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

    const downloadExcel = () => {
        var option = {};

        option.fileName = props.calculations
        option.datas = [
            {
                sheetData: data,
                sheetName: 'sheet',
                sheetFilter: ['key', 'time', 'probability'],
                sheetHeader: ['Номер реализации', 'Выдежка времени УРОВ', 'Вероятность излишней работы УРОВ'],
                columnWidths: [7, 10, 13],
            }
        ];

        var toExcel = new ExportJsonExcel(option);
        toExcel.saveExcel();
    }

    const topOptions = [
        {
            label: 'topRight',
            value: 'topRight',
        }
    ]
    const [top, setTop] = useState('topRight');

    return (
        <div style={{ marginRight: 10, marginTop: -10 }}>
            <Table columns={columns}
                dataSource={data}
                options={topOptions}
                pagination={{ pageSize: 6, position: [top] }}
                bordered={true}
                size="middle" 
                scroll={{
                    y: '29vh'
                  }}/>
            <Tooltip placement="left" title="Скачать результаты">
                <FloatButton onClick={downloadExcel} />
            </Tooltip>

        </div>
    )
}

export default ResultTable;