import { ComponentMeta, ComponentStory } from '@storybook/react';

import CartTotal from './CartTotal';

export default {
    title: 'Components/CartTotal',
    component: CartTotal,
} as ComponentMeta<typeof CartTotal>;

const Template: ComponentStory<typeof CartTotal> = (args) => (
    <CartTotal {...args} />
);

export const Default = Template.bind({});
Default.args = {
    total: 100.0,
};
