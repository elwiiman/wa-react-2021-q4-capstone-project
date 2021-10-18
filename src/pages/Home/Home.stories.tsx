import { ComponentMeta, Story } from '@storybook/react';

import Home from './Home';

export default {
    title: 'Pages/Home',
    component: Home,
} as ComponentMeta<typeof Home>;

const Template: Story = () => <Home />;

export const Default = Template.bind({});
Default.args = {};
