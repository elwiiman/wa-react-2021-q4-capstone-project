import { ComponentMeta, Story } from '@storybook/react';

import Trash from './Trash';

export default {
    title: 'Components/Icons/Trash',
    component: Trash,
} as ComponentMeta<typeof Trash>;

const Template: Story = () => <Trash />;

export const Default = Template.bind({});
Default.args = {};
