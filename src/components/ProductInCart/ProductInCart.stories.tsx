import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { cart } from '../../mocks/cart';

import ProductInCart from './ProductInCart';

export default {
    title: 'Components/ProductInCart',
    component: ProductInCart,
} as ComponentMeta<typeof ProductInCart>;

const Template: ComponentStory<typeof ProductInCart> = (args) => (
    <ProductInCart {...args} />
);

export const Default = Template.bind({});
Default.args = {
    product: cart.products[0],
    addToCart: action('adding to cart...'),
    removeFromCart: action('removing from cart..'),
};
