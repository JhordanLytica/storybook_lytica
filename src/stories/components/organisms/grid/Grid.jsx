import React from 'react';
import PropTypes from 'prop-types';
import './grid.css';

const backgroundColors = [
  'backgroundDarkPrimary',
  'backgroundDarkSecondary',
  'backgroundLightPrimary',
  'backgroundLightSecondary',
];

const cols = [
  'col1',
  'col2',
  'col3',
  'col4',
];

const gap = [
  's0',
  's1',
  's2',
  's3',
  's4',
  's5',
  's6',
  's7',
  's8',
  's9',
  's10',
];

export const Grid = ({ children, background, columns, spacing, style }) => {
  return (
    <div 
      className={['grid', background, columns, spacing].join(' ')}
      style={style}
    >
      {children}
    </div>
  );
};

Grid.propTypes = {
  background: PropTypes.oneOf(backgroundColors),
  columns: PropTypes.oneOf(cols),
  spacing: PropTypes.oneOf(gap),
  style: PropTypes.object,
  children: PropTypes.element,
};

Grid.defaultProps = {
  background: 'backgroundLightPrimary',
  columns: 'col1',
  spacing: 's2'
};
