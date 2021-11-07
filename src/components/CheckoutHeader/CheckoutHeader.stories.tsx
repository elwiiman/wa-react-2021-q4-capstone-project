import { ComponentMeta, Story } from '@storybook/react';

import CheckoutHeader from './CheckoutHeader';

export default {
    title: 'Components/CheckoutHeader',
    component: CheckoutHeader,
} as ComponentMeta<typeof CheckoutHeader>;

const Template: Story<typeof CheckoutHeader> = (args) => (
    <CheckoutHeader {...args} />
);

export const Default = Template.bind({});
Default.args = {};
