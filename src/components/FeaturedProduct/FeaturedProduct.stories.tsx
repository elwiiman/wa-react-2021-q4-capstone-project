import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { featureProduct } from '../../mocks/featuredProducts';
import FeaturedProduct from './FeaturedProduct';

export default {
    title: 'Components/FeaturedProduct',
    component: FeaturedProduct,
} as ComponentMeta<typeof FeaturedProduct>;

const Template: ComponentStory<typeof FeaturedProduct> = (args) => (
    <FeaturedProduct {...args} />
);

export const Default = Template.bind({});
Default.args = {
    product: featureProduct,
};
