import React from 'react';
import PropTypes from 'prop-types';
import { Title } from '../../atoms/title/Title';
import { Line } from '../../atoms/line/Line';
import './paper.css';

const backgroundColors = [
  'backgroundDarkPrimary',
  'backgroundDarkSecondary',
  'backgroundLightPrimary',
  'backgroundLightSecondary',
];

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

export const Paper = ({ children, background, style, shadow, title, color }) => {
  const shadows = shadow ? 'shadow' : '';
  return (
    <div 
      className={['paper',background, shadows ].join(' ')}
      style={style}
    >
      <div className={['headerPaper' ].join(' ')}>
        <Title variant="h4" color={color} align="left">{title}</Title>
      </div>
      <Line color="backgroundLightSecondary" />
      <div className={['childrenPaper' ].join(' ')}>
        {children}
      </div>
    </div>
  );
};

Paper.propTypes = {
  background: PropTypes.oneOf(backgroundColors),
  color: PropTypes.oneOf(Colors),
  style: PropTypes.object,
  children: PropTypes.element,
  shadows: PropTypes.bool,
};

Paper.defaultProps = {
  background: 'backgroundLightPrimary',
  shadows: false,
  color: "DP60"
};
