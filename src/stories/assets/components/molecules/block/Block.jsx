import React from 'react';
import PropTypes from 'prop-types';
import { Title } from '../../atoms/title/Title';

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
export const Block = ({ color, titles, subtitles, children, aligns}) => {
  return (
    <div>
      {titles ? <Title color={color} variant="h2" align={aligns}>{titles}</Title> : null}
      {subtitles ? <Title color={color} subtitle variant="h4" align={aligns}>{subtitles}</Title> : null}
      {children}
    </div>
  );
};

Block.propTypes = {
  color: PropTypes.oneOf(backgroundColors),
  children: PropTypes.node,
  aligns: PropTypes.oneOf(['right','left','center']),
  titles: PropTypes.string,
  subtitles: PropTypes.string,
};

Block.defaultProps = {
	color: 'baseBlue',
  aligns: 'left',
};
