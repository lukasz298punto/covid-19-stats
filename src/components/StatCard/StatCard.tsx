import { Card, CardProps, Spin, Typography } from 'antd';
import { isUndefined } from 'lodash';
import styled from 'styled-components';

export type Props = {
    kind?: 'success' | 'warning' | 'error';
    value?: number;
} & CardProps;

const getColor = (kind: Props['kind']) => {
    if (!kind) return null;

    const color = window
        .getComputedStyle(document.documentElement)
        .getPropertyValue(`--${kind}-color`);

    return color;
};

function StatCard({ value, className, loading, children, ...props }: Props) {
    return (
        <Spin spinning={!!loading} size="large">
            <Card type="inner" {...props} className={className}>
                {isUndefined(value) ? (
                    children
                ) : (
                    <Typography.Text className="block text-center text-6xl p-4">
                        {value}
                    </Typography.Text>
                )}
            </Card>
        </Spin>
    );
}

export default styled(StatCard)`
    border-color: ${({ kind }) => getColor(kind)};

    & span {
        color: ${({ kind }) => getColor(kind)};
    }
`;
