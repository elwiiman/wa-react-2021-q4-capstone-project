import { ComponentMeta, ComponentStory } from '@storybook/react';
import withFormik from 'storybook-formik';
import * as Yup from 'yup';

import CustomTextArea from './CustomTextArea';

export default {
    title: 'Components/Formik/CustomTextArea',
    component: CustomTextArea,
    decorators: [withFormik],
} as ComponentMeta<typeof CustomTextArea>;

const validationSchema = Yup.object({
    lastName: Yup.string().required('This field is mandatory'),
});

const Template: ComponentStory<typeof CustomTextArea> = (args) => (
    <CustomTextArea {...args} />
);

export const Default = Template.bind({});
Default.args = {
    id: 'abstract',
    name: 'abstract',
    label: 'Abstract ',
    extraMessage: 'Tell us about your brand',
    maxLength: 200,
    showCharactersLeft: true,
};

Default.parameters = {
    formik: {
        initialValues: {
            abstract: '',
        },
        validationSchema: validationSchema,
    },
};
