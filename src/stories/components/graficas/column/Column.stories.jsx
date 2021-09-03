import React from 'react';

import { Column } from './Column';

export default {
  title: 'graficas/Column',
  component: Column,
};

const Template= (args) => <Column {...args} />

export const Default = Template.bind({});
/*Default.args = {
  children: 'Title',
};
*/