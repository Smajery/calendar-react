import React, { FC } from 'react';
import {Layout, Menu, Row} from "antd";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const Navbar: FC = () => {
    const {isAuth, user} = useTypedSelector(state => state.auth)
    const {logout} = useActions()

    const logOut = () => {
        logout()
    }

    return (
        <Layout.Header>
            <Row justify={'end'}>
                {isAuth
                    ?
                    <>
                        <div style={{color: 'white'}}>
                            {user.username}
                        </div>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            selectable={false}
                            items={[{key: 1, label: 'Выйти', onClick: logOut}]}
                        />
                    </>
                    :
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        selectable={false}
                        defaultSelectedKeys={['1']}
                        items={[{key: 1, label: 'Авторизация'}]}
                    />
                }
            </Row>
        </Layout.Header>
    );
};

export default Navbar;