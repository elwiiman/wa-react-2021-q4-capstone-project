import { Meta, Story } from '@storybook/react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import NoResults from './NoResults';

export default {
    title: 'Components/NoResults',
    component: NoResults,
} as ComponentMeta<typeof NoResults>;

const Template: ComponentStory<typeof NoResults> = (args) => (
    <NoResults {...args} />
);

export const Default = Template.bind({});
Default.args = {
    reason: 'noResultsInSearch',
};
