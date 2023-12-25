import React, { useState } from 'react';
import { Button, Space, Table, Popconfirm } from 'antd';
import UserCreateForm from './UserCreateForm';
import { DeleteOutlined } from '@ant-design/icons';
import s from './Users.module.css';




const Users = (props) => {
  const deleteUserById = (id) => {
    console.log(id)
    props.deleteUserById(id);
  }

  const handleDelete = (key) => {
    props.deleteUserById(key);
  };

  const columns = [
    {
      title: 'Полное имя',
      dataIndex: 'name',
      key: 'name',
      width: '40%'
    },
    {
      title: 'Логин',
      dataIndex: 'login',
      key: 'login',
      width: '15%'
    },
    {
      title: 'Роль',
      dataIndex: 'post',
      key: 'post',
      width: '45%'
    },

    {
      title: ' ',
      key: 'id',
      render: (_, record) => (
        <Popconfirm title="Подвердите удаление" name='props,' onConfirm={() => deleteUserById(record.id)}>
          <a>{<DeleteOutlined />}</a>
        </Popconfirm>
      ),
    },

  ];
  const [open, setOpen] = useState(false);
  const onCreate = (user) => {
    console.log('Received values of form: ', user);
    props.createUser(user);
    setOpen(false);
  };
  return (
    <div className={s.table}>
      <Table columns={columns} dataSource={props.users.users} bordered title={() => 'Список пользователей'} />
      <Button style={{ float: 'right' }} type="primary" onClick={() => { setOpen(true); }}>Добавить</Button>
      <UserCreateForm open={open} onCreate={onCreate} onCancel={() => { setOpen(false); }} />
    </div>)
}
export default Users;

// title: ' ',
// key: 'action',
// render: (_, record) => (
//     <Popconfirm title="Подвердите удаление" onConfirm={() => deleteUserById(props.users[record.key])}>
//     <a>{<DeleteOutlined />}</a>
//     </Popconfirm>
// ),