import React from 'react';

import { DropDown } from './DropDown';

export default {
  title: 'atoms/Navigation/DropDown',
  component: DropDown,
};


const Template = (args) => <DropDown {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Jorge',
  data: ['option1', 'option2', 'option3'],
};