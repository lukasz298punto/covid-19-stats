import { Row, Col } from 'antd';
import { StatCard } from 'components/StatCard';
import { useTranslation } from 'react-i18next';
import { Line } from '@ant-design/charts';
import { useEffect, useMemo } from 'react';
import { useGetFactsLazyQuery, useGetFactsPerDatesLazyQuery } from 'graphql/generated';
import { useGlobalState } from 'constants/globalState';
import { find, flatMap } from 'lodash';
import { getRangeOptions, RangeOption } from 'utils/dates';

function World() {
    const { t } = useTranslation();
    const [getFacts, { loading: factsLoading, data: factsData }] = useGetFactsLazyQuery();
    const [getFactsPerDates, { loading: factsPerDatesLoading, data: factsPerDatesData }] =
        useGetFactsPerDatesLazyQuery();
    const [rangeType] = useGlobalState('dateRangeType');

    const calculateChartData = useMemo(
        () =>
            flatMap(factsPerDatesData?.offchain?.covid?.facts, (fact) => [
                { year: fact.date?.date, value: fact.confirmed, category: t('Confirmed') },
                { year: fact.date?.date, value: fact.deaths, category: t('Deaths') },
                { year: fact.date?.date, value: fact.recovered, category: t('Recovered') },
            ]),
        [factsPerDatesData]
    );

    useEffect(() => {
        const { range } = find(getRangeOptions(), { value: rangeType }) as RangeOption;

        if (range) {
            getFacts({ variables: { from: range[0], till: range[1] } });
            getFactsPerDates({ variables: { from: range[0], till: range[1] } });
        }
    }, [rangeType]);

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
                <StatCard title={t('Count of new cases')} loading={factsPerDatesLoading}>
                    <Line
                        data={calculateChartData}
                        height={400}
                        xField="year"
                        yField="value"
                        seriesField="category"
                        xAxis={{
                            type: 'time',
                        }}
                        color={['#1979C9', '#D62A0D', '#FAA219']}
                    />
                </StatCard>
            </Col>
        </Row>
    );
}

export default World;
