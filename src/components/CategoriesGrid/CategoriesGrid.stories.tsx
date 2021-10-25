import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { productCategories } from '../../mocks/productCategories';

import CategoriesGrid from './CategoriesGrid';

export default {
    title: 'Components/CategoriesGrid',
    component: CategoriesGrid,
} as ComponentMeta<typeof CategoriesGrid>;

const Template: ComponentStory<typeof CategoriesGrid> = (args) => (
    <CategoriesGrid {...args} />
);

export const Default = Template.bind({});
Default.args = {
    categories: productCategories.results,
};
