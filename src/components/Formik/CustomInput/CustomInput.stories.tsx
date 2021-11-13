import { ComponentMeta, ComponentStory } from '@storybook/react';
import withFormik from 'storybook-formik';
import * as Yup from 'yup';

import CustomInput from './CustomInput';

export default {
    title: 'Components/Formik/CustomInput',
    component: CustomInput,
    decorators: [withFormik],
} as ComponentMeta<typeof CustomInput>;

const validationSchema = Yup.object({
    lastName: Yup.string().required('This field is mandatory'),
});

const Template: ComponentStory<typeof CustomInput> = (args) => (
    <CustomInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
    id: 'lastName',
    name: 'lastName',
    type: 'text',
    label: 'Last Name',
    extraMessage: 'Example: Sánchez Robles',
};

Default.parameters = {
    formik: {
        initialValues: {
            lastName: 'Sánchez Robles',
        },
        validationSchema: validationSchema,
    },
};
