import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { productById } from '../../mocks/productById';

import ProductInfo from './ProductInfo';

export default {
    title: 'Components/ProductInfo',
    component: ProductInfo,
} as ComponentMeta<typeof ProductInfo>;

const Template: ComponentStory<typeof ProductInfo> = (args) => (
    <ProductInfo {...args} />
);

export const Default = Template.bind({});
Default.args = {
    product: productById.results[0],
};
