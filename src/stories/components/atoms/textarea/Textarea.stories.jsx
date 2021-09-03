import React from 'react';

import { Textarea } from './Textarea';

export default {
  title: 'atoms/Inputs/Textarea',
  component: Textarea,
};

const Template = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
