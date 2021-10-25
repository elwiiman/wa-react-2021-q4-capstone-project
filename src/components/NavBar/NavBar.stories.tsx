import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import NavBar from './NavBar';

export default {
    title: 'Components/NavBar',
    component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Default = Template.bind({});
Default.args = {
    doSearch: action('do Search'),
};
