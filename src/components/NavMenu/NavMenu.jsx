import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Menu, ConfigProvider} from 'antd';
import InfoFile from './../../fileInfo.pdf'
import { MenuOutlined, UserOutlined, LogoutOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import SOlogo from '../../so.png';


const NavMenu = () => {
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("userId");
        localStorage.removeItem("post");
    }
    const RequireAdmin = ({ children }) => {
        if (localStorage.getItem('post') == 'Администратор') {
            return children;
        }
    };
    const user = useSelector((state) => state.auth.user);

    return (
        <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#209e5f',
            Menu:{
                darkItemBg: '#004731',
                horizontalItemBorderRadius: 10
          },
        }}}
      >
        
        <Menu theme="dark" type="primary" mode="horizontal" defaultSelectedKeys={['home']} overflowedIndicator={<MenuOutlined />} style={{
            display: 'flex',
            alignItems: 'center',
        }}>
            <img src={SOlogo} style={{height: 50, marginRight: 50}}/>
            <Menu.Item key="results" >
                <NavLink tag={Link} className="text-white" to="/result" style={{ textDecoration: 'none' }}>Результаты расчетов</NavLink>
            </Menu.Item>
            <Menu.Item key="calculation" >
                <NavLink tag={Link} className="text-white" to="/calculation" style={{ textDecoration: 'none' }}>Выполнить расчет</NavLink>
            </Menu.Item>
            <RequireAdmin>
                <Menu.Item key="users" >
                    <NavLink tag={Link} className="text-white" to="/users" style={{ textDecoration: 'none' }}>Пользователи</NavLink>
                </Menu.Item>
            </RequireAdmin>
            <Menu.Item icon={
                <a href={InfoFile} download={'Руководство пользователя.pdf'}>
                    <QuestionCircleOutlined />
                </a>
            }/>
            <Menu.SubMenu title={localStorage.getItem('user')} icon={<UserOutlined />} style={{ float: 'right', marginLeft: 'auto' }}>
                <Menu.Item icon={<LogoutOutlined />} >
                    <a onClick={logout} href='/'>Выйти</a>
                </Menu.Item>
            </Menu.SubMenu>
        </Menu>
        
        </ConfigProvider>
    )
}


export default NavMenu;
