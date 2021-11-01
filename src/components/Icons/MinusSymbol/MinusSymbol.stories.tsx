import { ComponentMeta, Story } from '@storybook/react';

import MinusSymbol from './MinusSymbol';

export default {
    title: 'Components/Icons/MinusSymbol',
    component: MinusSymbol,
} as ComponentMeta<typeof MinusSymbol>;

const Template: Story = () => <MinusSymbol />;

export const Default = Template.bind({});
Default.args = {};
