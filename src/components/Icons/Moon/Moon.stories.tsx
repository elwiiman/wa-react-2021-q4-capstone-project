import { ComponentMeta, Story } from '@storybook/react';

import Moon from './Moon';

export default {
    title: 'Components/Icons/Moon',
    component: Moon,
} as ComponentMeta<typeof Moon>;

const Template: Story = () => <Moon />;

export const Default = Template.bind({});
Default.args = {};
