import React from 'react';

import { Block } from './Block';
import { Text } from '../../atoms/text/Text'

export default {
  title: 'molecules/Block',
  component: Block,
};

export const Default = (args) => 
  <Block {...args} titles="Atom">
    <Text align="justify">
      An atom is the smallest constituent unit of ordinary matter that has the properties of a
      chemical element. Every solid, liquid, gas, and plasma is composed of neutral or ionized
      atoms. Atoms are very small; typical sizes are around 100 picometers (a ten-billionth of a
      meter, in the short scale).
    </Text>
  </Block>
;
