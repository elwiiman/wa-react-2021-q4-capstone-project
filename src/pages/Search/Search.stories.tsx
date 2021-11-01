import { ComponentMeta, Story } from '@storybook/react';

import Search from './Search';

export default {
    title: 'Pages/Search',
    parameters: {
        layout: 'fullscreen',
    },
    component: Search,
} as ComponentMeta<typeof Search>;

const Template: Story = () => <Search />;

export const Default = Template.bind({});
Default.args = {};
