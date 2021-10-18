import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { featuredBanners } from '../../mocks/featuredBanners';

import Slider from './Slider';

export default {
    title: 'Components/FeaturesBannersSlider',
    component: Slider,
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;

export const Default = Template.bind({});
Default.args = {
    slides: featuredBanners.results,
};
