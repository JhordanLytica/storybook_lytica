import React from 'react';

import { Notifications } from './Notifications';

export default {
  title: 'atoms/Surfaces/Notifications',
  component: Notifications,
};


const Template = (args) => <Notifications {...args} />;

export const Default = Template.bind({});
Default.args = {
    number: 2,
};