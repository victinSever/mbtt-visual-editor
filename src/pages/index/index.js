import React, { useState } from 'react';
import { Menu } from 'antd';
import {
    MailOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import Template from './components/template';
import Index from './components/index';
import Establish from '../establish/resume';
import './indexStyle.scss'
import { get } from '../../api/http'
// 路由使用
import { Routes, Route, Navigate, useNavigate } from "react-router-dom"

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const items = [
    getItem('首页', 'index', <PieChartOutlined />),
    getItem('创建', 'sub1', <MailOutlined />, [
        getItem('新建', '/home'),
        getItem('模板', 'template'),
    ]),
];

function findOne() {
    get('/api/mform/findOne', {
        id: "123112"
    }).then(res => {
        console.log(res);
    })
}

const App = () => {
    const [collapsed] = useState(false);
    const navigate = useNavigate()
    const onClick = (e) => {
        console.log('click ', e);
        navigate(e.key)
    };
    // getFun()
    return (
        <>
            <div
                className='leftMenu'
            >
                <h3 onClick={() => findOne()}>visual-editor</h3>
                <Menu
                    defaultSelectedKeys={['index']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={collapsed}
                    items={items}
                    onClick={onClick}
                />
            </div>
            <div className='content'>
                <Routes>
                    <Route path="template" element={<Template />}></Route>
                    <Route path="index" element={<Index />}></Route>
                    <Route path="*" element={<Navigate to="index" />} />
                    <Route path="establish" element={<Establish />} />
                </Routes>
            </div>

        </>
    );
};

export default App;