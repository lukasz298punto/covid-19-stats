import { DesktopOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons';
import Continents from 'pages/Continents';
import Countries from 'pages/Countries';
import World from 'pages/World';

const prefix = '/covid-19-stats';

export const routes = {
    WORLD: {
        path: `${prefix}/`,
        component: <World />,
        settings: {
            icon: <PieChartOutlined />,
        },
        name: 'World',
    },
    COUNTRIES: {
        path: `${prefix}/countries`,
        component: <Countries />,
        settings: {
            icon: <DesktopOutlined />,
        },
        name: 'Countries',
    },
    CONTINENTS: {
        path: `${prefix}/continents`,
        component: <Continents />,
        settings: {
            icon: <UserOutlined />,
        },
        name: 'Continents',
    },
} as const;
