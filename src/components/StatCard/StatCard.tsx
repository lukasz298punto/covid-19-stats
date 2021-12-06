import { Card, CardProps, Typography } from 'antd';
import styled from 'styled-components';

export type Props = {
    kind?: 'success' | 'warning' | 'error';
    value: number;
} & CardProps;

const getColor = (kind: Props['kind']) => {
    if (!kind) return null;

    const color = window
        .getComputedStyle(document.documentElement)
        .getPropertyValue(`--${kind}-color`);

    return color;
};

function StatCard({ value = 0, className, ...props }: Props) {
    return (
        <Card type="inner" {...props} className={className}>
            <Typography.Text className="block text-center text-6xl p-4">{value}</Typography.Text>
        </Card>
    );
}

export default styled(StatCard)`
    border-color: ${({ kind }) => getColor(kind)};

    & span {
        color: ${({ kind }) => getColor(kind)};
    }
`;
