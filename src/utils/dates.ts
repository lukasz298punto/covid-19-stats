import {
    endOfMonth,
    endOfWeek,
    endOfYear,
    format,
    startOfMonth,
    startOfWeek,
    startOfYear,
    subMonths,
} from 'date-fns';

export type RangeOption = {
    label: string;
    value: number;
    range: [string, string];
};

export function getRangeOptions(): RangeOption[] {
    const dateFormat = 'yyyy-MM-dd';
    return [
        {
            label: 'Last 7 days',
            value: 1,
            range: [
                format(startOfWeek(new Date()), dateFormat),
                format(endOfWeek(new Date()), dateFormat),
            ],
        },
        {
            label: 'This month',
            value: 2,
            range: [
                format(startOfMonth(new Date()), dateFormat),
                format(endOfMonth(new Date()), dateFormat),
            ],
        },
        {
            label: 'Last month',
            value: 3,
            range: [
                format(startOfMonth(subMonths(new Date(), 1)), dateFormat),
                format(endOfMonth(subMonths(new Date(), 1)), dateFormat),
            ],
        },
        {
            label: 'This year',
            value: 4,
            range: [
                format(startOfYear(new Date()), dateFormat),
                format(endOfYear(new Date()), dateFormat),
            ],
        },
    ];
}
