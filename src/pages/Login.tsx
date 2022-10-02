import React, {FC} from 'react';
import {Card, Layout, Row} from "antd";
import LoginForm from "../components/LoginForm";

const Login: FC = () => {
    return (
        <Layout>
            <Row justify='center' align='middle' className='h100'>
                <Card style={{border: '1px solid lightgrey'}}>
                    <LoginForm/>
                </Card>
            </Row>
        </Layout>
    );
};

export default Login;