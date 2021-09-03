import React from 'react';
import PropTypes from 'prop-types';
import './progress.css';

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
export const Progress = ({ variant, color, process }) => {
	switch (variant) {
    case 'bootstrap':
      return (
        <div className={['progress'].join(' ')}>
          <div className={['fill', 'a', color].join(' ')} style={{width: process}}></div>
        </div>
      );
    case 'porcentaje': 
      return (
        <div className={['container'].join(' ')}>
          <div className={['containerfill', color].join(' ')} style={{width: process}} />
          <span className={['containertext'].join(' ')}>{process}</span>
        </div>
      );
  }
};

Progress.propTypes = {
  variant: PropTypes.oneOf(['bootstrap', 'porcentaje']).isRequired,
  color: PropTypes.oneOf(backgroundColors),
  process: PropTypes.string,
};

Progress.defaultProps = {
	color: 'baseBlue',
  variant: 'bootstrap',
};
