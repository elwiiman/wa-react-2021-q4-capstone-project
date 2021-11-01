import { ComponentMeta, ComponentStory } from '@storybook/react';
import { productById } from '../../mocks/productById';

import ProductSpecs from './ProductSpecs';

export default {
    title: 'Components/ProductSpecs',
    component: ProductSpecs,
} as ComponentMeta<typeof ProductSpecs>;

const Template: ComponentStory<typeof ProductSpecs> = (args) => (
    <ProductSpecs {...args} />
);

export const Default = Template.bind({});
Default.args = {
    product: productById.results[0],
};
