import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Stepper } from './Stepper';
import { Block } from '../../molecules/block/Block';
import { Text } from '../../atoms/text/Text';
import { Button } from '../../atoms/button/Button';
const Colors = [
  'baseBlue',
  'LB20',
  'LB40',
  'LB60',
  'DB20',
  'DB40',
  'DB60',
  'baseGreen',
  'LG20',
  'LG40',
  'LG60',
  'DG20',
  'DG40',
  'DG60',
  'baseOrange',
  'LO20',
  'LO40',
  'LO60',
  'DO20',
  'DO40',
  'DO60',
  'baseRed',
  'LR20',
  'LR40',
  'LR60',
  'DR20',
  'DR40',
  'DR60',
  'basePink',
  'LP20',
  'LP40',
  'LP60',
  'DP20',
  'DP40',
  'DP60',
  'G100',
  'G200',
  'G300',
  'G400',
  'G500',
];

const backgroundColors = [
  'backgroundDarkPrimary',
  'backgroundDarkSecondary',
  'backgroundLightPrimary',
  'backgroundLightSecondary',
]

function Container({ modelo, color, background }) {
  switch (modelo) {
    case 1:
      return (
        <Block titles="Atom" color={color}>
          <Text color={/^D|^backgroundDark|^G[1-3]00/.test(background) ? 'G500' : null}>
            An atom is the smallest constituent unit of ordinary matter that has the properties of a
            chemical element. Every solid, liquid, gas, and plasma is composed of neutral or ionized
            atoms. Atoms are very small; typical sizes are around 100 picometers (a ten-billionth of
            a meter, in the short scale).
          </Text>
        </Block>
      )
    case 2:
      return (
        <Block titles="Molecules" color={color}>
          <Text color={/^D|^backgroundDark|^G[1-3]00/.test(background) ? 'G500' : null}>
            They are the composition of one or more components of atoms. Here we begin to compose
            complex components and reuse some of those components. Molecules can have their own
            properties and create functionalities by using atoms, which don’t have any function or
            action by themselves.
          </Text>
        </Block>
      )
    case 3:
      return (
        <Block titles="Organisms" color={color}>
          <Text color={/^D|^backgroundDark|^G[1-3]00/.test(background) ? 'G500' : null}>
            Organisms are the combination of molecules that work together or even with atoms that
            compose more elaborate interfaces. At this level, the components begin to have the final
            shape, but they are still ensured to be independent, portable and reusable enough to be
            reusable in any content.
          </Text>
        </Block>
      )
    default:
      return (
        <Block titles="Atom">
          <Text color={/^D|^backgroundDark|^G[1-3]00/.test(background) ? 'G500' : null}>
            An atom is the smallest constituent unit of ordinary matter that has the properties of a
            chemical element. Every solid, liquid, gas, and plasma is composed of neutral or ionized
            atoms. Atoms are very small; typical sizes are around 100 picometers (a ten-billionth of
            a meter, in the short scale).
          </Text>
        </Block>
      )
  }
}
export default {
  title: 'organisms/Stepper',
  component: Stepper,
};

const  Step = ({ color, background }) => {
  const [state, setState] = useState(1);
  Step.propTypes = {
    color: PropTypes.oneOf(Colors),
    background: PropTypes.oneOf(backgroundColors),
  };
  
  Step.defaultProps = {
    color: 'baseBlue',
    background: 'backgroundLightPrimary',
  };
  return (
    <Stepper step={state} color={color} background={background}>
      <Container modelo={state} color={color} background={background}/>
      <div className={['center'].join(' ')} style={{ marginTop: '10px' }}>
        <div style={{ width: '100px' }}>
          <Button
            color={color}
            onClick={() => setState(state === 1 ? 1 : state - 1)}
          >
            Atras
          </Button>
        </div>
        <div style={{ width: '100px' }}>
          <Button
            color={color}
            onClick={() => setState(state === 3 ? 3 : state + 1)}
          >
            Siguiente
          </Button>
        </div>
      </div>
    </Stepper>
  );
}

export const Default = (args) => <Step {...args}/>;
