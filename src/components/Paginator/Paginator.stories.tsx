import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Paginator from './Paginator';

export default {
    title: 'Components/Paginator',
    component: Paginator,
} as ComponentMeta<typeof Paginator>;

const Template: ComponentStory<typeof Paginator> = (args) => (
    <Paginator {...args} />
);

export const Default = Template.bind({});
Default.args = {
    totalCount: 64,
    currentPage: 1,
    pageSize: 12,
    siblingCount: 3,
    onPageChange: action('page changed...'),
};
