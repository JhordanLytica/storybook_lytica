import React from 'react';
import PropTypes from 'prop-types';
import './line.css';

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
export const Line = ({ color, size }) => {
  return (
		<div 
			style={size !=="" ? 
				{width: size} 
			: null}
			className={['line', color].join(' ')} 
		/>
	);
};

Line.propTypes = {
  color: PropTypes.oneOf(backgroundColors),
	size: PropTypes.string,
};

Line.defaultProps = {
	color: 'baseBlue',
};
