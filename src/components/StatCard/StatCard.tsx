import { Card, CardProps } from 'antd';
import styled from 'styled-components';

export type Props = {
    kind?: 'success' | 'warning' | 'error';
    value: number;
} & CardProps;

const getRoleColor = (kind: Props['kind']) => {
    if (!kind) return null;

    const color = window
        .getComputedStyle(document.documentElement)
        .getPropertyValue(`--${kind}-color`);

    return color;
};

function StatCard({ value = 0, className, ...props }: Props) {
    return (
        <Card {...props} className={className}>
            {value}
        </Card>
    );
}

export default styled(StatCard)`
    border-color: ${({ kind }) => getRoleColor(kind)};
`;
