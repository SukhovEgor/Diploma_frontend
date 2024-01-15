import React, { useState } from 'react';
import { Button, Form, Input, Modal, Select, message } from 'antd';
const UserCreateForm = ({ open, onCreate, onCancel, users }) => {
    const [form] = Form.useForm();
    const handleChange = event => {
        const result = event.target.value.replace(/[^a-z]/gi, '')}
    return (
        <Modal open={open} title="Добавить нового опльзователя" okText="Создать" cancelText="Отмена" onCancel={onCancel}
            onOk={() => {

                form.validateFields().then((values) => {
                    
                    for(let i = 0; i < users.length; i++){
                        if(users[i].login == values.login){
                            message.error('Пользователь с таким логином уже существует');
                             return
                        }
                    } 
                    form.resetFields();
                    onCreate(values);
                })
                    .catch((info) => { console.log('Validate Failed:', info); });
            }}>
                
            <Form size='small' form={form} layout="vertical" name="form_in_modal" initialValues={{ modifier: 'public', }}>
                <Form.Item name="name" label="Имя" rules={[{ required: true, message: 'Введите имя', pattern: new RegExp("^[a-zA-Zа-яА-Я]*$"),},]}>
                    <Input />
                </Form.Item>
                <Form.Item name="surName" label="Фамилия" rules={[{ required: true, message: 'Введите фамилию', pattern: new RegExp("^[a-zA-Zа-яА-Я]*$") },]}>
                    <Input type="textarea" onValuesChange={handleChange}/>
                </Form.Item>
                <Form.Item name="lastName" label="Отчество" rules={[{ required: true, message: 'Введите отчество', pattern: new RegExp("^[a-zA-Zа-яА-Я]*$") },]}>
                    <Input type="textarea" />
                </Form.Item>
                <Form.Item name="post" label="Роль" rules={[{ required: true, message: 'Введите роль', },]}>
                    <Select>
                        <Select.Option value="Технолог">Технолог</Select.Option>
                        <Select.Option value="Администратор">Администратор</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item name="login" label="Логин" rules={[{ required: true, message: 'Введите логин', },]}>
                    <Input type="textarea" />
                </Form.Item>
                <Form.Item name="password" label="Пароль" rules={[{ required: true, message: 'Введите пароль', },]}>
                    <Input type="textarea" />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default UserCreateForm;