import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { productById } from '../../mocks/productById';

import ProductGallery from './ProductGallery';

export default {
    title: 'Components/ProductGallery',
    component: ProductGallery,
} as ComponentMeta<typeof ProductGallery>;

const Template: ComponentStory<typeof ProductGallery> = (args) => (
    <ProductGallery {...args} />
);

export const Default = Template.bind({});
Default.args = {
    product: productById.results[0],
};
