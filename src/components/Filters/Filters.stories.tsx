import { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { productCategories } from '../../mocks/productCategories';
import { featuredProducts } from '../../mocks/featuredProducts';
import Filters from './Filters';

export default {
    title: 'Components/Filters',
    component: Filters,
} as ComponentMeta<typeof Filters>;

const Template: ComponentStory<typeof Filters> = (args) => {
    const [filteredProducts, setFilteredProducts] = useState(
        featuredProducts.results
    );

    console.log('filteredProducts', filteredProducts);

    return <Filters {...args} setParentProducts={setFilteredProducts} />;
};

export const Default = Template.bind({});
Default.args = {
    categories: productCategories.results,
    baseProducts: featuredProducts.results,
};
