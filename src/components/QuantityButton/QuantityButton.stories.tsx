import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import QuantityButton from './QuantityButton';

export default {
    title: 'Components/QuantityButton',
    component: QuantityButton,
} as ComponentMeta<typeof QuantityButton>;

const Template: ComponentStory<typeof QuantityButton> = (args) => (
    <QuantityButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
    quantity: 2,
    maxQuantity: 4,
    onQuantityChange: action('Quantity is sent to API'),
    onErrorHappen: action('An error happenened'),
};
