import { ComponentMeta, Story } from '@storybook/react';

import LockCard from './LockCard';

export default {
    title: 'Components/Icons/LockCard',
    component: LockCard,
} as ComponentMeta<typeof LockCard>;

const Template: Story<typeof LockCard> = (args) => <LockCard {...args} />;

export const Default = Template.bind({});
Default.args = {};
