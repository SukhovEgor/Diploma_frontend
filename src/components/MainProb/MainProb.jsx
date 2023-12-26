import { useParams } from 'react-router-dom';
import './MainProb.css';
import ResultsProbContainer from "./ResultsProb/ResultsProbContainer";
import { Col, Row } from 'antd';
import CalculationsProbContainer from './СalculationsProb/CalculationsProbContainer';

const MainProb = (props) => {
    const params = useParams();
    const calculationId = params.id;
    return (
        <div className="mainProb">
            <div >
                <Row>
                    <Col span={6} className='calculations'>

                        <CalculationsProbContainer />

                    </Col>
                    <Col span={18}>
                        {calculationId != null ? (

                            <ResultsProbContainer />
                        ) : null}
                    </Col>
                </Row>


            </div>
        </div>
    )
}

export default MainProb;