import { ComponentMeta, Story } from '@storybook/react';

import Search from './Search';

export default {
    title: 'Components/Icons/Search',
    component: Search,
} as ComponentMeta<typeof Search>;

const Template: Story = () => <Search />;

export const Default = Template.bind({});
Default.args = {};
