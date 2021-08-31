import React from 'react';
import { GridItems } from '../../molecules/gridItems/GridItems';
import { Block } from '../../molecules/block/Block';
import { Text } from '../../atoms/text/Text';
import { Grid } from './Grid';

export default {
  title: 'organisms/Grid',
  component: Grid,
};

export const Default = (args) => 
  <Grid columns="col3" spacing="s4" {...args}>
    <GridItems {...args}>
      <Block titles="Atom">
        <Text align="justify" color={args.background && /^D|^backgroundDark|^G[1-3]00/.test(args.background) ? 'G500' : null}>
          An atom is the smallest constituent unit of ordinary matter that has the properties of a
          chemical element. Every solid, liquid, gas, and plasma is composed of neutral or ionized
          atoms. Atoms are very small; typical sizes are around 100 picometers (a ten-billionth of a
          meter, in the short scale).
        </Text>
      </Block>
    </GridItems>
    <GridItems  {...args}>
      <Block titles="Molecules">
        <Text align="justify" color={args.background && /^D|^backgroundDark|^G[1-3]00/.test(args.background) ? 'G500' : null}>
          They are the composition of one or more components of atoms. Here we begin to compose
          complex components and reuse some of those components. Molecules can have their own
          properties and create functionalities by using atoms, which don’t have any function or
          action by themselves.
        </Text>
      </Block>
    </GridItems>
    <GridItems  {...args}>
      <Block titles="Organisms">
        <Text align="justify" color={args.background && /^D|^backgroundDark|^G[1-3]00/.test(args.background) ? 'G500' : null}>
          Organisms are the combination of molecules that work together or even with atoms that
          compose more elaborate interfaces. At this level, the components begin to have the final
          shape, but they are still ensured to be independent, portable and reusable enough to be
          reusable in any content.
        </Text>
      </Block>
    </GridItems>
  </Grid>
;
