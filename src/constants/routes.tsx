import { DesktopOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons';
import Continents from 'pages/Continents';
import Countries from 'pages/Countries';
import World from 'pages/World';

const prefix = '/covid-19-stats';

export const routes = {
    WORLD: {
        path: `${prefix}`,
        component: World,
        settings: {
            icon: <PieChartOutlined />,
        },
        name: 'world',
    },
    COUNTRIES: {
        path: `${prefix}/countries`,
        component: Countries,
        isExact: false,
        settings: {
            icon: <DesktopOutlined />,
        },
        name: 'countries',
    },
    CONTINENTS: {
        path: `${prefix}/continents`,
        component: Continents,
        settings: {
            icon: <UserOutlined />,
        },
        name: 'continents',
    },
} as const;
