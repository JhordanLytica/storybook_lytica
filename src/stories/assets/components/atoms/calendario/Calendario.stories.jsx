import React from 'react';

import { Calendario } from './Calendario';

export default {
  title: 'atoms/Inputs/Calendario',
  component: Calendario,
};

export const Template = (args) => <Calendario {...args} date='2021-07-28' />;
