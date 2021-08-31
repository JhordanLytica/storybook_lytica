import React from 'react';
import { Text } from '../../atoms/text/Text';
import { Paper } from './Paper';

export default {
  title: 'organisms/Paper',
  component: Paper,
};

export const Default = (args) => 
  <Paper title="Atom" {...args}>
    <Text align="justify" color={args.background && /^D|^backgroundDark|^G[1-3]00/.test(args.background) ? 'G500' : null}>
      An atom is the smallest constituent unit of ordinary matter that has the properties of a
      chemical element. Every solid, liquid, gas, and plasma is composed of neutral or ionized
      atoms. Atoms are very small; typical sizes are around 100 picometers (a ten-billionth of a
      meter, in the short scale).
    </Text>
  </Paper>
;
