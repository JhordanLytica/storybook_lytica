import React from 'react';

import { Text } from './Text';

export default {
  title: 'atoms/Text/Text',
  component: Text,
};

export const TextDefault = (args) => 
  <Text {...args}>
    Atom
    An atom is the smallest constituent unit of ordinary matter that has the properties of a
    chemical element. Every solid, liquid, gas, and plasma is composed of neutral or ionized
    atoms. Atoms are very small; typical sizes are around 100 picometers (a ten-billionth of a
    meter, in the short scale).
  </Text>
;
