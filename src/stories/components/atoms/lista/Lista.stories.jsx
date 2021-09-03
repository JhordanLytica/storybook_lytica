import React from 'react';

import { Lista } from './Lista';

export default {
  title: 'atoms/Navigation/Lista',
  component: Lista,
};
const Template = (args) => <Lista {...args} />;

export const SpinnerOne = Template.bind({});