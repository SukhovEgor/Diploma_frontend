import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import s from './NavMenu.module.css';

 const NavMenu = () => {
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
         </Menu>
     )
}

export default NavMenu;
