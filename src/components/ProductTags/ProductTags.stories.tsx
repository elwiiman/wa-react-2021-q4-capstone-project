import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { productById } from '../../mocks/productById';

import ProductTags from './ProductTags';

export default {
    title: 'Components/ProductTags',
    component: ProductTags,
} as ComponentMeta<typeof ProductTags>;

const Template: ComponentStory<typeof ProductTags> = (args) => (
    <ProductTags {...args} />
);

export const Default = Template.bind({});
Default.args = {
    product: productById.results[0],
};
