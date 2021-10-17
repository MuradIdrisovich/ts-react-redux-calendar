import React, {FC, useState} from 'react';
import {Button, Form, Input} from "antd";
import {rules} from "../utils/rules";
import {useDispatch} from "react-redux";
import {AuthActionCreators} from "../store/reducers/auth/action-creators";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const LoginForm: FC = () => {
    const {error, isLoading} = useTypedSelector(state => state.auth);
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {login} = useActions()
    const [form] = Form.useForm();

    const submit = () => {
        login(username, password)
    }
    const onFill = () => {
        form.setFieldsValue({
            "username": 'user',
            "password": '123',
        });
        setUsername('user');
        setPassword('123')
    };

    return (
        <Form
            onFinish={submit}
            form={form}
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
        >
            {error && <div style={{color: 'red'}}>
                {error}
            </div>}
            <Form.Item
                name="username"
                rules={[rules.required("Пожалуйста введите имя пользователя!")]}
            >
                <Input
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    prefix={<UserOutlined className="site-form-item-icon" />}
                />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[rules.required("Пожалуйста введите пароль")]}
                hasFeedback
            >
                <Input.Password
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type={"password"}
                    prefix={<LockOutlined className="site-form-item-icon" />}
                />
            </Form.Item>
            <Form.Item>
                <Button type="default" htmlType="button" onClick={onFill}>
                    Fill form
                </Button>
            </Form.Item>
            <Form.Item>
                <Button type='primary' htmlType="submit" loading={isLoading}>
                    Log in
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;
