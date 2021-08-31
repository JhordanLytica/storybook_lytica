import React from 'react';
import PropTypes from 'prop-types';
import './stepperHead.css';
import { Avatar } from '../../atoms/avatar/Avatar';
import { Line } from '../../atoms/line/Line';

const backgroundColors = [
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
/**
 * Primary UI component for user interaction
 */
export const StepperHead = ({ color, step }) => {
  return (
    <div className={['progressBar'].join(' ')}>
      <Avatar variant="Num" color={color} size="cuatro">1</Avatar>
      <Line size="33.33%" color={color} />
      <Avatar variant="Num" color={step >= 2 ? color : "G300" } size="cuatro">2</Avatar>
      <Line size="33.33%" color={step >= 2 ? color : "G300" }/>
      <Avatar variant="Num" color={step >= 3 ? color : "G300" } size="cuatro">3</Avatar>
    </div>
  );
};

StepperHead.propTypes = {
  color: PropTypes.oneOf(backgroundColors),
  step: PropTypes.oneOf([1, 2, 3]),
};

StepperHead.defaultProps = {
	color: 'baseBlue',
  step: 1,
};
