import { ComponentMeta, Story } from '@storybook/react';

import Close from './Close';

export default {
    title: 'Components/Icons/Close',
    component: Close,
} as ComponentMeta<typeof Close>;

const Template: Story<typeof Close> = (args) => <Close {...args} />;

export const Default = Template.bind({});
Default.args = {};
