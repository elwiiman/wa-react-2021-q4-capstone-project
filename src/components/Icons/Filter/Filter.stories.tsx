import { ComponentMeta, Story } from '@storybook/react';

import Filter from './Filter';

export default {
    title: 'Components/Icons/Filter',
    component: Filter,
} as ComponentMeta<typeof Filter>;

const Template: Story<typeof Filter> = (args) => <Filter {...args} />;

export const Default = Template.bind({});
Default.args = {};
