import React from 'react';

import { Avatar } from './Avatar';

export default {
    title: 'atoms/User/Avatar',
    component: Avatar,
};

const Template = (args) => <Avatar {...args} />;

export const Placeholder = Template.bind({});

Placeholder.args = {
    variant: 'Placeholder',
    size: 'tres'
}

export const Num = Template.bind({});

Num.args = {
    variant: 'Num',
    size: 'tres'
}