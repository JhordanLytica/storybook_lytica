import React from 'react';

import { Switch } from './Switch';

export default {
  title: 'atoms/Inputs/Switch',
  component: Switch,
};

const Template = (args) => <Switch {...args} />;

export const Default = Template.bind({});

export const Text = Template.bind({});
Text.args = {
  text1: 'A',
	text2: 'B'
};
