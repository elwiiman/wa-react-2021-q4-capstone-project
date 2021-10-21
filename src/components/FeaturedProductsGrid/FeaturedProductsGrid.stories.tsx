import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { featuredProducts } from '../../mocks/featuredProducts';
import FeaturedProductsGrid from './FeaturedProductsGrid';
import { MemoryRouter } from 'react-router-dom';

export default {
    title: 'Components/FeaturedProductsGrid',
    component: FeaturedProductsGrid,
} as ComponentMeta<typeof FeaturedProductsGrid>;

const Template: ComponentStory<typeof FeaturedProductsGrid> = (args) => (
    <MemoryRouter>
        <FeaturedProductsGrid {...args} />
    </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {
    products: featuredProducts.results,
};
