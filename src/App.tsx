import React, {FC} from 'react';
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import {Layout} from "antd";
import './App.css'

const App: FC = () => {
    return (
        <div>
            <Navbar/>
            <Layout.Content>
                <AppRouter/>
            </Layout.Content>
        </div>
    );
};

export default App;