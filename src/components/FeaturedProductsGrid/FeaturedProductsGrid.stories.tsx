import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { featuredProducts } from '../../mocks/featuredProducts';
import FeaturedProductsGrid from './FeaturedProductsGrid';

export default {
    title: 'Components/FeaturedProductsGrid',
    component: FeaturedProductsGrid,
} as ComponentMeta<typeof FeaturedProductsGrid>;

const Template: ComponentStory<typeof FeaturedProductsGrid> = (args) => (
    <FeaturedProductsGrid {...args} />
);

export const Default = Template.bind({});
Default.args = {
    products: featuredProducts.results,
};
