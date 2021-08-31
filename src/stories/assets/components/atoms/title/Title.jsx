import React from 'react';
import PropTypes from 'prop-types';
import './title.css';

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
export const Title = ({ color, variant, children, subtitle, align }) => {
  const subtitles = subtitle ? 'subtitle' : '';
  const aligns = align === 'right' ? 
    'textalignRight' : align === 'left' ? 
    'textalignLeft' : align === 'center' ? 
    'textalignCenter' : 'textalignCenter';

	switch (variant) {
    case 'h1':
      return <h1 className={[`C${color}`, subtitles, aligns].join(' ')}>{children}</h1>;
    case 'h2':
      return <h2 className={[`C${color}`, subtitles, aligns].join(' ')}>{children}</h2>;
    case 'h3':
      return <h3 className={[`C${color}`, subtitles, aligns].join(' ')}>{children}</h3>;
    case 'h4':
      return <h4 className={[`C${color}`, subtitles, aligns].join(' ')}>{children}</h4>;
    case 'h5':
      return <h5 className={[`C${color}`, subtitles, aligns].join(' ')}>{children}</h5>;
    case 'h6':
      return <h6 className={[`C${color}`, subtitles, aligns].join(' ')}>{children}</h6>;
    default:
      return <h1 className={[`C${color}`, subtitles, aligns].join(' ')}>{children}</h1>;
  }
};

Title.propTypes = {
  color: PropTypes.oneOf(backgroundColors),
  variant: PropTypes.oneOf(['h1','h2','h3','h4','h5','h6']),
  subtitle: PropTypes.bool,
  children: PropTypes.node,
  align: PropTypes.oneOf(['right','left','center']),
};

Title.defaultProps = {
	color: 'baseBlue',
  variant: 'h1',
  subtitle: false,
  align: 'center'
};
