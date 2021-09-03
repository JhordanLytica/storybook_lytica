import React from 'react';
import PropTypes from 'prop-types';
import { StepperHead } from '../../molecules/stepperHead/StepperHead';

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
];
/**
 * Primary UI component for user interaction
 */
export const Stepper = ({ children, color, step, background }) => {
  return (
    <div className={[background].join(' ')} style={{width: '100%', height: 'auto', padding: '10px'}}>
      <StepperHead color={color} step={step} />
      <div>
        {children}
      </div>
    </div>
  );
};

Stepper.propTypes = {
  color: PropTypes.oneOf(Colors),
  step: PropTypes.oneOf([1, 2, 3]),
  background: PropTypes.oneOf(backgroundColors),
};

Stepper.defaultProps = {
	color: 'baseBlue',
  step: 1,
  background: 'backgroundLightPrimary',
};
