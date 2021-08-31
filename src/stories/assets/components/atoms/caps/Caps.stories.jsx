import React from 'react';

import { Caps } from './Caps';

export default {
  title: 'atoms/Text/Caps',
  component: Caps,
};

export const CapsDefault = (args) => 
  <Caps {...args}>
    Atom
    An atom is the smallest constituent unit of ordinary matter that has the properties of a
    chemical element. Every solid, liquid, gas, and plasma is composed of neutral or ionized
    atoms. Atoms are very small; typical sizes are around 100 picometers (a ten-billionth of a
    meter, in the short scale).
  </Caps>
;
