import React from 'react';

import { Checkbox } from './Checkbox';

export default {
  title: 'atoms/Inputs/Checkbox',
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const Checkboxs = Template.bind({});
Checkboxs.args = {
  label: 'Checkbox',
	variant: 'checkbox',
};

export const radio = Template.bind({});
radio.args = {
  label: 'Radio',
	variant: 'radio'
};
