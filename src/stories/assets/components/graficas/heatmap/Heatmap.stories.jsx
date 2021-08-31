import React from 'react';

import { Heatmap } from './Heatmap';

export default {
  title: 'graficas/Heatmap',
  component: Heatmap,
};

const Template= (args) => <Heatmap {...args} />

export const Default = Template.bind({});
/*Default.args = {
  children: 'Title',
};
*/