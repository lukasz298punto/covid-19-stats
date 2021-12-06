import { Row, Col } from 'antd';
import { StatCard } from 'components/StatCard';
import { useTranslation } from 'react-i18next';

function World() {
    const { t } = useTranslation();

    return (
        <Row gutter={[8, 8]}>
            <Col xs={24} lg={8}>
                <StatCard title={t('Confirmed')} kind="warning" value={11} />
            </Col>
            <Col xs={24} lg={8}>
                <StatCard title={t('Recovered')} kind="success" value={11} />
            </Col>
            <Col xs={24} lg={8}>
                <StatCard title={t('Deaths')} kind="error" value={11} />
            </Col>
        </Row>
    );
}

export default World;
