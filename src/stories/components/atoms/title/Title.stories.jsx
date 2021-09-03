import React from 'react';

import { Title } from './Title';

export default {
  title: 'atoms/Text/Title',
  component: Title,
};

const Template = (args) =><Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Title',
};
