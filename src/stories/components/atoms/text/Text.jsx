import React from 'react';
import PropTypes from 'prop-types';

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
export const Text = ({ color, size, children, italic, align, bold, style }) => {
  const italics = italic ? 'subtitle' : '';
  const bolds = bold ? 'bold' : '';
  let aligns = 'textalignJustify';
    switch (align) {
      case 'right':
        aligns = 'textalignRight';
        break;
      case 'left':
        aligns = 'textalignLeft';
        break;
      case 'center':
        aligns = 'textalignCenter';
        break;
      case 'justify':
        aligns = 'textalignJustify';
        break;
      default:
        aligns = 'textalignJustify';
        break;
    }
  return(<p className={[`C${color}`, italics, aligns, size, bolds].join(' ')} style={style}>{children}</p>);
};

Text.propTypes = {
  color: PropTypes.oneOf(backgroundColors),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  italic: PropTypes.bool,
  bold: PropTypes.bool,
  children: PropTypes.node,
  align: PropTypes.oneOf(['right','left','center', 'justify']),
  style: PropTypes.object,
};

Text.defaultProps = {
	color: 'G100',
  size: 'medium',
  italic: false,
  align: 'left',
  bold: false,
};
