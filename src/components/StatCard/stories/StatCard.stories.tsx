import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StatCard } from '..';

export default {
    title: 'StatCard',
    component: StatCard,
} as ComponentMeta<typeof StatCard>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof StatCard> = (args) => <StatCard {...args} />;

export const Primary = Template.bind({});
Primary.args = { kind: 'error' };

export const Secondary = Template.bind({});
Secondary.args = { kind: 'success' };

export const Tertiary = Template.bind({});
Tertiary.args = {};
