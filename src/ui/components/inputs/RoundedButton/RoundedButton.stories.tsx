import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RoundedButton from './RoundedButton';

export default {
    title: 'inputs/RoundedButton',
    component: RoundedButton
} as ComponentMeta<typeof RoundedButton>;

// 'forma' para criar outros stories para este componente -> estrutura base do componente
const Template: ComponentStory<typeof RoundedButton> = (args) => (
    <RoundedButton {...args}>Clique Aqui</RoundedButton>
);

export const Default = Template.bind({});
Default.args = {
    variant: 'contained'
};

