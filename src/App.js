import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import NavMenu from './components/NavMenu/NavMenu';
import { Navigate } from 'react-router-dom';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Calculation from './components/CalculationProbForm/CalculationProbForm'
import CalculationResult from './components/MainProb/СalculationsProb/CalculationsProb'
import MainProb from './components/MainProb/MainProb';
import CalculationProbFormContainer from './components/CalculationProbForm/CalculationProbFormContainer';

const { Header, Content, Footer } = Layout;

const App = () => {
    return (
        <BrowserRouter>
            <Layout className="layout">
                <Header>
                    <NavMenu />
                </Header>
                <Content style={{height:"83vh"}}>
                    <Routes>
                        <Route path="/calculation" element={<CalculationProbFormContainer />} />
                        <Route path="/result" element={<MainProb />} />
                    </Routes>
                </Content>

            </Layout>
        </BrowserRouter>
    );
};
export default App;


{/* <Footer
style={{
    textAlign: 'center',
}}
>
Ant Design ©2023 Created by Ant UED
</Footer> */}