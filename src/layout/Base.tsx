import { Layout, Menu } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

type Props = {
    children?: React.ReactNode;
};

function Base({ children }: Props) {
    const location = useLocation();

    return (
        <Layout className="h-screen">
            <Sider collapsible>
                <Menu theme="dark" selectedKeys={[location.pathname]} mode="inline">
                    <Menu.Item key="/" icon={<PieChartOutlined />}>
                        <Link to="/">home</Link>
                    </Menu.Item>
                    <Menu.Item key="/teams" icon={<DesktopOutlined />}>
                        <Link to="/teams">Tems</Link>
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                        <Menu.Item key="3">Tom</Menu.Item>
                        <Menu.Item key="4">Bill</Menu.Item>
                        <Menu.Item key="5">Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                        <Menu.Item key="6">Team 1</Menu.Item>
                        <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9" icon={<FileOutlined />}>
                        Files
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Content className="mx-4">{children}</Content>
                <Footer className="text-center">Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
}

export default Base;
