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
    return <Filters {...args} />;
};

export const Default = Template.bind({});
Default.args = {
    categories: productCategories.results,
};
