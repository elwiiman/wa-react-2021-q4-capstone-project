import { ComponentMeta, Story } from '@storybook/react';

import PlusSymbol from './PlusSymbol';

export default {
    title: 'Components/Icons/PlusSymbol',
    component: PlusSymbol,
} as ComponentMeta<typeof PlusSymbol>;

const Template: Story = () => <PlusSymbol />;

export const Default = Template.bind({});
Default.args = {};
