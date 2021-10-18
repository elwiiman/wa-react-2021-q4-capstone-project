import { ComponentMeta, ComponentStory } from '@storybook/react';

import SimpleButton from './SimpleButton';

export default {
    title: 'Components/SimpleButton',
    component: SimpleButton,
} as ComponentMeta<typeof SimpleButton>;

const Template: ComponentStory<typeof SimpleButton> = (args) => (
    <SimpleButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
    label: 'Click me',
    enablePaperBackground: false,
};
