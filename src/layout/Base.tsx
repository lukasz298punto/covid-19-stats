import { Layout, Menu } from 'antd';
import { routes } from 'constants/routes';
import { map } from 'lodash';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

const { Content, Footer, Sider } = Layout;

type Props = {
    children?: React.ReactNode;
};

function Base({ children }: Props) {
    const location = useLocation();
    const { t } = useTranslation();

    return (
        <Layout className="h-screen">
            <Sider collapsible>
                <Menu theme="dark" selectedKeys={[location.pathname]} mode="inline">
                    {map(routes, ({ name, settings: { icon }, path }) => (
                        <Menu.Item key={path} icon={icon}>
                            <Link to={path}>{t(name)}</Link>
                        </Menu.Item>
                    ))}
                </Menu>
            </Sider>
            <Layout>
                <Content className="p-4">{children}</Content>
                <Footer className="text-center">Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
}

export default Base;
