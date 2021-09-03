import React from 'react';

import { Badge } from './Badge';

export default {
  title: 'atoms/Surfaces/Badge',
  component: Badge,
};

const Template = (args) => <Badge {...args} />;

export const Decremento = Template.bind({});
Decremento.args = {
  text: '10%',
};

export const Incremento = Template.bind({});
Incremento.args = {
  text: '10%',
  incr: true,
  color: 'baseBlue',
  background: 'LB60'
};