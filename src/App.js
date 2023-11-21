import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import NavMenu from './components/NavMenu/NavMenu';
import { Navigate } from 'react-router-dom';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Calculation from './components/Calculation/Calculation'
import CalculationResult from './components/CalculationResult/CalculationResult'

const { Header, Content, Footer } = Layout;

const App = () => {
    return (
        <BrowserRouter>
            <Layout className="layout">
                <Header>
                    <NavMenu />
                </Header>
                <Content style={{height:"100px"}}>
                    <Routes>
                        <Route path="/calculation" element={<Calculation />} />
                        <Route path="/result" element={<CalculationResult />} />
                    </Routes>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©2023 Created by Ant UED
                </Footer>
            </Layout>
        </BrowserRouter>
    );
};
export default App;
