import { Meta, Story } from '@storybook/react';

import NoResults from './NoResults';

const meta: Meta = {
    title: 'Components/NoResults',
    component: NoResults,
};

export default meta;

const Template: Story = (args) => {
    return <NoResults {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
