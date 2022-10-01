import React, {FC, useState} from 'react';
import {Layout, Menu, Row} from "antd";
import {useNavigate} from "react-router-dom";
import {RouteNames} from "../routes";
import {useTypedSelector} from "../hooks/useTypedSelector";

const Navbar: FC = () => {
    const navigate = useNavigate()
    const {isAuth} = useTypedSelector(state => state.auth)

    return (
        <Layout.Header>
            <Row justify={'end'}>
                {isAuth
                    ?
                    <>
                        <div style={{color: 'white'}}>
                            Smajery
                        </div>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            selectable={false}
                            items={[{key: 1, label: 'Выйти'}]}
                        />
                    </>
                    :
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        selectable={false}
                        items={[{key: 1, label: 'Логин 1'}]}
                    />
                }
            </Row>
        </Layout.Header>
    );
};

export default Navbar;