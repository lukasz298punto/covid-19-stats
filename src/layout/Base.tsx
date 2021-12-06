import { Layout, Menu, Row, Typography, Select } from 'antd';
import { routes } from 'constants/routes';
import { map } from 'lodash';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { useGlobalState } from 'constants/globalState';
import { getRangeOptions } from 'utils/dates';

const { Content, Sider, Header } = Layout;
const { Title, Text } = Typography;

type Props = {
    children?: React.ReactNode;
};

function Base({ children }: Props) {
    const location = useLocation();
    const { t } = useTranslation();
    const [range, setRange] = useGlobalState('dateRangeType');

    console.log(getRangeOptions(), 'getRangeOptions');

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
                <Header className="site-layout-background px-4">
                    <Row justify="space-between" className="items-center">
                        <Title level={3} className="text-white m-0 lg:block md:block hidden">
                            {t('COVID-2019 Statistics')}
                        </Title>
                        <div>
                            <Text className="text-white mr-2">{t('Date range')}</Text>
                            <Select
                                value={range}
                                onChange={(value) => setRange(value)}
                                className="w-36"
                                options={map(getRangeOptions(), ({ value, label }) => ({
                                    value,
                                    label: t(label),
                                }))}
                            />
                        </div>
                    </Row>
                </Header>
                <Content className="p-4" style={{ overflowY: 'auto' }}>
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
}

export default Base;
