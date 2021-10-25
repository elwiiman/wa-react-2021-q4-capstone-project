import { ComponentMeta, Story } from '@storybook/react';

import Footer from './Footer';

export default {
    title: 'Components/Footer',
    component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: Story = () => <Footer />;

export const Default = Template.bind({});
Default.args = {};
