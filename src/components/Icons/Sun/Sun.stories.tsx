import { ComponentMeta, Story } from '@storybook/react';

import Sun from './Sun';

export default {
    title: 'Components/Icons/Sun',
    component: Sun,
} as ComponentMeta<typeof Sun>;

const Template: Story = () => <Sun />;

export const Default = Template.bind({});
Default.args = {};
