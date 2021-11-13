import { ComponentMeta, ComponentStory } from '@storybook/react';
import { cart } from '../../mocks/cart';

import ConfirmedProduct from './ConfirmedProduct';

export default {
    title: 'Components/ConfirmedProduct',
    component: ConfirmedProduct,
} as ComponentMeta<typeof ConfirmedProduct>;

const Template: ComponentStory<typeof ConfirmedProduct> = (args) => (
    <ConfirmedProduct {...args} />
);

export const Default = Template.bind({});
Default.args = {
    product: cart.products[0],
};
