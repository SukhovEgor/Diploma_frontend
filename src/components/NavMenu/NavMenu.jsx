import React from 'react';
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

{/* <>
<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']} style={{height:"7vh"}}>
<Menu.Item key="calculation" > 
  <NavLink tag={Link} className="text-white" to="/calculation" style={{ textDecoration: 'none' }}>Результаты расчетов</NavLink>
</Menu.Item>
<Menu.Item key="results" > 
  <NavLink tag={Link} className="text-white" to="/calculationres" style={{ textDecoration: 'none' }}>Выполнить расчет</NavLink>
</Menu.Item>
</Menu>
</>  */}

{/* <nav className={s.nav}>
<div>
    <NavLink to='/calculation' >Profile</NavLink>
</div>
<div>
    <NavLink to='/dialogs' className = { navData => navData.isActive ? s.active : s.item }>Messages</NavLink>
</div>
</nav> */}

{/* <Menu
theme="dark"
mode="horizontal"
defaultSelectedKeys={['2']}
items={new Array(15).fill(null).map((_, index) => {
  const key = index + 1;
  return {
    key,
    label: `nav ${key}`,
  };
})}
/> */}