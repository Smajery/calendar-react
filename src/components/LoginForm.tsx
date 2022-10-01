import React, {FC} from 'react';
import {Button, Form, Input} from "antd";
import {rules} from "../utils/rules";
import {useDispatch} from "react-redux";
import {AuthActionCreators} from "../store/reducers/auth/action-creators";
import {Dispatch} from "react";
import {useTypedSelector} from "../hooks/useTypedSelector";

const LoginForm: FC = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const {error, isLoading} = useTypedSelector(state => state.auth)

    const submit = () => {
        dispatch(AuthActionCreators.login('user', '123'))
    }
    return (
        <Form
            onFinish={submit}
        >
            <Form.Item
                label='Имя пользователя'
                name='username'
                rules={[rules.required('Пожалуйста, введите свое имя')]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                label='Пароль'
                name='password'
                rules={[rules.required('Пожалуйста, введите свой пароль')]}
            >
                <Input/>
            </Form.Item>
            <Form.Item>
                <Button type='primary' htmlType='submit'>
                    Войти
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;