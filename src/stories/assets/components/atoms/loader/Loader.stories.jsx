import React from 'react';

import { Loader } from './Loader';

export default {
  title: 'atoms/Feedback/Loader',
  component: Loader,
};
const Template = (args) => <Loader {...args} />;

export const SpinnerOne = Template.bind({});
SpinnerOne.args = {
  variant: 'Spinner-One',
};

export const SpinnerTwo = Template.bind({});
SpinnerTwo.args = {
  variant: 'Spinner-Two',
};

export const Balls = Template.bind({});
Balls.args = {
  variant: 'Balls',
};