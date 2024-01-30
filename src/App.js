import React from 'react';
import { Provider } from "react-redux";
import store from "./redux/redux-store";
import { Breadcrumb, ConfigProvider, Layout, Menu, theme } from 'antd';
import NavMenu from './components/NavMenu/NavMenu';
import { Navigate } from 'react-router-dom';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Calculation from './components/CalculationProbForm/CalculationProbForm'
import CalculationResult from './components/MainProb/СalculationsProb/CalculationsProb'
import MainProb from './components/MainProb/MainProb';
import CalculationProbFormContainer from './components/CalculationProbForm/CalculationProbFormContainer';
import UsersContainer from './components/Users/UsersContainer';
import AuthContainer from './components/Auth/AuthContainer';


const { Header, Content, Footer } = Layout;

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <ConfigProvider
                    theme={{
                        token: {
                            colorPrimary :'#004731',
                            Layout: {
                                headerBg: '#004731',
                            }
                        },
                    }}
                >
                    <Layout className="layout">
                        <Header>
                        <NavMenu />
                        </Header>
                        <Content style={{ height: "93vh" }}>
                            <Routes>
                                <Route path="/" element={<Navigate to="/result" />} />
                                <Route exact path='/result' element={<RequireAuth ><MainProb /></RequireAuth>}>
                                    <Route exact path=':id' element={<RequireAuth ><MainProb /></RequireAuth>} />
                                </Route>
                                <Route exact path='/calculation' element={<RequireAuth ><CalculationProbFormContainer /></RequireAuth>} />
                                <Route exact path='/users' element={<RequireAuth ><UsersContainer /></RequireAuth>} />
                                <Route exact path='/auth' element={<RequireAuth ><AuthContainer /></RequireAuth>} />

                            </Routes>
                        </Content>
                    </Layout>
                </ConfigProvider>
            </BrowserRouter>
        </Provider>
    );
};

const RequireAuth = ({ children }) => {
    if (localStorage.getItem('user') == null) {
        return <AuthContainer />;
    }
    return children;
};

export default App;


