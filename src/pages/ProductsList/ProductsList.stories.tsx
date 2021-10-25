import { ComponentMeta, Story } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import ProductsList from './ProductsList';

export default {
    title: 'Pages/ProductsList',
    parameters: {
        layout: 'fullscreen',
    },
    component: ProductsList,
} as ComponentMeta<typeof ProductsList>;

const Template: Story = () => (
    <MemoryRouter>
        <ProductsList />
    </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {};
