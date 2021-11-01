import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CustomCheckbox from './CustomCheckbox';

export default {
    title: 'Components/CustomCheckbox',
    component: CustomCheckbox,
} as ComponentMeta<typeof CustomCheckbox>;

const Template: ComponentStory<typeof CustomCheckbox> = (args) => (
    <CustomCheckbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
    label: 'Furniture',
    name: 'Furniture',
    id: 'Furniture',
    disabled: false,
    fontType: 'paragraph',
    onChange: action('execute onChange function'),
};
