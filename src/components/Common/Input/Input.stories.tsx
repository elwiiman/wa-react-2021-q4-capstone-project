import { Story, Meta } from '@storybook/react';

import Input, { Iinput } from './Input';
import useInput from '../../../hooks/useInput';

const meta: Meta = {
    title: 'Components/Common/Form/StyledInput',
    component: Input,
};

export default meta;

const Template: Story<Iinput> = (args) => {
    const email = useInput('');

    return (
        <>
            <Input {...args} placeholder="Email" {...email} />
        </>
    );
};

export const Default = Template.bind({});
Default.args = {
    radius: '5px',
    error: false,
};
