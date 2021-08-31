import React from 'react';

import { Menu } from './Menu';
import Lytica from '../../images/lytica.png';

export default {
  title: 'molecules/Navigation/Menu',
  component: Menu,
};

const Template = (args) => <Menu {...args} />;

export const Default = Template.bind({});
Default.args = {
  logo: Lytica,
  user: 'Jhordan',
  options: ['option1', 'option2', 'option3']
};