import React from 'react';
import PropTypes from 'prop-types';
import './list.css';
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

export const List = ({ background, top, left, width, height, variant, children}) => {
  // eslint-disable-next-line default-case
  switch (variant) {
    case 'vertical':
      return (
        <div 
          className={['containerList', background].join(' ')}
          style={{top: `${top}px`, left: `${left}px`, width: width, height: height }}
        >
          {children}
        </div>
      );  
    case 'horizontal': 
    return (
      <div 
        className={['containerList', background].join(' ')}
        style={{top: `${top}px`, left: `${left}px`, width: width, height: height }}
      >
        {children}
      </div>
    );
  }
};

List.propTypes = {
  background: PropTypes.oneOf(backgroundColors),
  variant: PropTypes.oneOf(['vertical', 'horizontal']),
  top: PropTypes.number,
  left: PropTypes.number,
  height: PropTypes.string,
  width: PropTypes.string,
  children: PropTypes.node,
};

List.defaultProps = {
	background: 'DP60',
  top: 0,
  left: 0,
  height: '272px',
  width: '100%',
  variant: 'vertical'
};
