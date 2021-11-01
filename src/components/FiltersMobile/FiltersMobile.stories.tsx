import { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { productCategories } from '../../mocks/productCategories';
import { featuredProducts } from '../../mocks/featuredProducts';
import FiltersMobile from './FiltersMobile';

export default {
    title: 'Components/FiltersMobile',
    component: FiltersMobile,
} as ComponentMeta<typeof FiltersMobile>;

const Template: ComponentStory<typeof FiltersMobile> = (args) => {
    const [filteredProducts, setFilteredProducts] = useState(
        featuredProducts.results
    );

    console.log('filteredProducts', filteredProducts);

    return <FiltersMobile {...args} setParentProducts={setFilteredProducts} />;
};

export const Default = Template.bind({});
Default.args = {
    categories: productCategories.results,
    baseProducts: featuredProducts.results,
};
