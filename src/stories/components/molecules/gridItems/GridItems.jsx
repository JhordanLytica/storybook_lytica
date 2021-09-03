import React from 'react';
import PropTypes from 'prop-types';
import './gridItems.css';
const backgroundColors = [
  'backgroundDarkPrimary',
  'backgroundDarkSecondary',
  'backgroundLightPrimary',
  'backgroundLightSecondary',
];

export const GridItems = ({ children, shadow, background }) => {
  const boxshadow = shadow ? 'shadow' : '';
  return (
    <div className={['grid','gridItems', background, boxshadow].join(' ')}>
      <div style={{padding: '10px'}}>
        {children}
      </div>
    </div>
  );
};

GridItems.propTypes = {
  children: PropTypes.node,
  shadow: PropTypes.bool,
  background: PropTypes.oneOf(backgroundColors),
};

GridItems.defaultProps = {
	shadow: true,
  background: 'backgroundLightSecondary',
};
