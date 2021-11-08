import { ComponentMeta, Story } from '@storybook/react';

import ProductDetail from './ProductDetail';

export default {
    title: 'Pages/ProductDetail',
    parameters: {
        layout: 'fullscreen',
    },
    component: ProductDetail,
} as ComponentMeta<typeof ProductDetail>;

const Template: Story = () => <ProductDetail />;

export const Default = Template.bind({});
Default.args = {};
