import React from 'react';
import PropTypes from 'prop-types';
import './badge.css';
import {Caps} from '../caps/Caps';
import { BsArrowUpRight, BsArrowDownRight } from 'react-icons/bs';

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
/**
 * Primary UI component for user interaction
 */
export const Badge = ({ incr, color, background, text}) => {
  return(
    <div className={['badge', 'center', background].join(' ')}>
      <Caps bold size="medium" color={color}>
        {text}
        {'  '}
        {incr ?  <BsArrowUpRight /> : <BsArrowDownRight />}
      </Caps>
    </div>
  );
};

Badge.propTypes = {
  incr: PropTypes.bool,
  color: PropTypes.oneOf(Colors),
  background: PropTypes.oneOf(Colors),
  text: PropTypes.string,
};

Badge.defaultProps = {
	color: 'DO20',
  background: 'LO60',
  incr: false,
};
