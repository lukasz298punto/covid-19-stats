import { Row, Col } from 'antd';
import { StatCard } from 'components/StatCard';
import { useTranslation } from 'react-i18next';
import { Line } from '@ant-design/charts';
import { useEffect } from 'react';
import { useGetFactsLazyQuery } from 'graphql/generated';
import { useGlobalState } from 'constants/globalState';

function World() {
    const { t } = useTranslation();
    const [getFacts, { loading: factsLoading, data: factsData }] = useGetFactsLazyQuery();
    const [range] = useGlobalState('dateRangeType');

    const data = [
        { year: '1991', value: 3 },
        { year: '1992', value: 4 },
        { year: '1993', value: 3.5 },
        { year: '1994', value: 5 },
        { year: '1995', value: 4.9 },
        { year: '1996', value: 6 },
        { year: '1997', value: 7 },
        { year: '1998', value: 9 },
        { year: '1999', value: 13 },
    ];

    useEffect(() => {
        getFacts({ variables: { from: '2021-11-30', till: '2021-12-06T23:59:59' } });
    }, [range]);

    console.log(factsLoading, 'factsLoading');

    return (
        <Row gutter={[8, 8]}>
            <Col xs={24} lg={8}>
                <StatCard
                    title={t('Confirmed')}
                    kind="warning"
                    value={factsData?.offchain?.covid?.facts?.[0].confirmed || 0}
                    loading={factsLoading}
                />
            </Col>
            <Col xs={24} lg={8}>
                <StatCard
                    title={t('Recovered')}
                    kind="success"
                    value={factsData?.offchain?.covid?.facts?.[0].recovered || 0}
                    loading={factsLoading}
                />
            </Col>
            <Col xs={24} lg={8}>
                <StatCard
                    title={t('Deaths')}
                    kind="error"
                    value={factsData?.offchain?.covid?.facts?.[0].deaths || 0}
                    loading={factsLoading}
                />
            </Col>
            <Col xs={24} lg={24}>
                <StatCard title={t('Count of new cases')}>
                    <Line
                        data={data}
                        height={400}
                        xField="year"
                        yField="value"
                        point={{
                            size: 5,
                            shape: 'diamond',
                        }}
                    />
                </StatCard>
            </Col>
            <Col xs={24} lg={24}>
                <StatCard title={t('Count of new cases')}>
                    <Line
                        data={data}
                        height={400}
                        xField="year"
                        yField="value"
                        point={{
                            size: 5,
                            shape: 'diamond',
                        }}
                    />
                </StatCard>
            </Col>
        </Row>
    );
}

export default World;
