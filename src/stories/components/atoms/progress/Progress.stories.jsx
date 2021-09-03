import React from 'react';

import { Progress } from './Progress';

export default {
  title: 'atoms/Feedback/Progress',
  component: Progress,
};

const Template = (args) => <Progress {...args} />;

export const Bootstrap = Template.bind({});
Bootstrap.args = {
	variant: 'bootstrap',
  process: '75%'
};

export const Porcentaje = Template.bind({});
Porcentaje.args = {
	variant: 'porcentaje',
  process: '75%'
};
