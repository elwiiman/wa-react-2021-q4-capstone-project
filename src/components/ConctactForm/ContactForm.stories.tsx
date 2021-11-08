import { ComponentMeta, Story } from '@storybook/react';
import ConctactForm from './ContactForm';
import withFormik from 'storybook-formik';

export default {
    title: 'Components/ConctactForm',
    component: ConctactForm,
    decorators: [withFormik],
} as ComponentMeta<typeof ConctactForm>;

const Template: Story = (args) => <ConctactForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
