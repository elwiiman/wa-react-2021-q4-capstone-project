import { ComponentMeta, ComponentStory } from '@storybook/react';

import CartStatus from './CartStatus';

export default {
    title: 'Components/CartStatus',
    component: CartStatus,
} as ComponentMeta<typeof CartStatus>;

const Template: ComponentStory<typeof CartStatus> = (args) => (
    <CartStatus {...args} />
);

export const Default = Template.bind({});
Default.args = {
    totalCount: 0,
};
