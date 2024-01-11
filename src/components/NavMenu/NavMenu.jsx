import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import { MenuOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';


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

    return (
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']} style={{
            display: 'flex',
            alignItems: 'center',
        }}>
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
            <Menu.SubMenu title={localStorage.getItem('user')} icon={<UserOutlined />} style={{ float: 'right', marginLeft: 'auto' }}>
                <Menu.Item icon={<LogoutOutlined />} >
                    <a onClick={logout} href='/'>Выйти</a>
                </Menu.Item>
            </Menu.SubMenu>
        </Menu>
    )
}

export default NavMenu;
