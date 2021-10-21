import { ComponentMeta, Story } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import Home from './Home';

export default {
    title: 'Pages/Home',
    component: Home,
} as ComponentMeta<typeof Home>;

const Template: Story = () => (
    <MemoryRouter>
        <Home />
    </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {};
