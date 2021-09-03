import React from 'react';

import { Bar } from './Bar';

export default {
  title: 'graficas/Bar',
  component: Bar,
};

const Template= (args) => <Bar {...args} />

export const Default = Template.bind({});
/*Default.args = {
  children: 'Title',
};
*/